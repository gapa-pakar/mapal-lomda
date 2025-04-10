import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Questions.module.css";
import splashFrontImg from "../../assets/graphics/Splash_2_SVG.svg";
import WaterfallEffectImg from "../../assets/graphics/WaterfallEffect.svg";
import ffImg from "../../assets/graphics/Fireflies/Questions.svg";
import { MouseParallax } from "react-just-parallax";


function Questions() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [correct, setCorrect] = useState(false);
  const PAGES = {
    "question 1": 0,
    "question 2": 1,
    "question 3": 2,
    "transition": 3,
  }
  const CONTENT = [
    {
      type: "true/false",
      title: "נכון או לא נכון?",
      question: "מפל הניאגרה הוא המפל הגבוה בעולם.",
      answer: ["לא נכון"],
      explanation: "מפל אנחל הוא הגבוה ביותר."
    },
    {
      type: "true/false",
      title: "נכון או לא נכון?",
      question: "ניתן למצוא מפלים בתוך מערות.",
      answer: ["נכון"],
      explanation: "ניתן למצוא מפלים במערות."
    },
    {
      type: "fill",
      title: "השלם את המשפט:",
      question: "מפל גמלא הוא המפל ה___ ביותר בישראל, וגבוהו ____ מטרים",
      answer: ["גבוה20", "גבוהעשרים"],
      explanation: "גבוה, 20"
    }
  ]

  /** handleAnswer: Checks and displays answer validity. **/
  const handleAnswer = (e) => {
    let answer;
    if (CONTENT[page].type === "true/false") {
      answer = e.target.innerText;
    } else {
      answer = document.getElementById("fill-1").value;
      answer += document.getElementById("fill-2").value;
    }
    if (answer) {
      if (CONTENT[page].answer.includes(answer)) {
        setCorrect(true);
      }
      setShowAnswer(true);
    }
  }

  /** handlePage: Handles passage between pages. **/
  const handlePage = () => {
    if (page !== PAGES["transition"] - 1) {
      setPage(page + 1);
      setShowAnswer(false);
      setCorrect(false);
    } else {
      setTransitioning(true);
      setTimeout(() => {
        navigate("/Ending");
      }, 2000);
    }
  }

  return (
    <>
      <div className={styles.bg}>

        {/* SIGN */}
        <div className={styles.sign}
          style={{ display: showAnswer ? "flex" : "none" }}>
          <span className={styles.correct}>
            {correct ? "נכון!" : "לא נכון!"}
          </span>
          <span className={styles.answer}>
            {CONTENT[page].explanation}
          </span>
        </div>

        {/* WATERFALL */}
        <div id="waterfall-wrap"
          style={{ display: showAnswer ? "none" : "block" }}>
          <div className={styles.waterfall}>
            <img className={styles["waterfall-effect"]} src={WaterfallEffectImg} />
          </div>
          <div className={styles.splash}>
            <img className={styles["splash-front"]} src={splashFrontImg} />
          </div>
        </div>

        {/* TEXT */}
        <div className={styles.wrapper}>
          <div className={styles.title}>
            {CONTENT[page].title}
          </div>
          <div className={styles.question}>
            {CONTENT[page].question}
          </div>

          {/* TRUE/FALSE */}
          <div className={styles.buttons} style={{ display: CONTENT[page].type === "true/false" ? "flex" : "none" }}>
            <button onClick={!showAnswer ? handleAnswer : null} className={showAnswer ? styles.inactive : styles.active}>נכון</button>
            <button onClick={!showAnswer ? handleAnswer : null} className={showAnswer ? styles.inactive : styles.active}> לא נכון</button>
          </div>

          {/* FILL */}
          <div className={styles.buttons} style={{ display: CONTENT[page].type === "fill" ? "flex" : "none" }}>
            <input id="fill-1" placeholder="1:"></input>
            <input id="fill-2" placeholder="2:"></input>
            <button onClick={!showAnswer ? handleAnswer : null} className={showAnswer ? styles.inactive : styles.active}>הגש</button>
          </div>

          {/* CONTINUE */}
          <div onClick={handlePage} className={styles.next}
            style={{
              opacity: showAnswer ? "100%" : "0%", visibility: showAnswer ? "visible" : "hidden",
              color: page === PAGES["question 3"] ? "var(--text)" : "var(--teal)"
            }}>
            {page < PAGES["question 3"] ? "המשך" : "סיום"}
          </div>
        </div>

        {/* FIREFLIES */}
        <MouseParallax isAbsolutelyPositioned>
          <img src={ffImg} className={styles.ff} />
        </MouseParallax>
      </div >

      {/* TRANSITION */}
      < div className={`${styles.transition} ${transitioning ? styles["fade-in"] : styles["fade-out"]}`
      } />
    </>
  );
}

export default Questions;
