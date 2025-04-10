import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChapterOne.module.css";
import boatImg from "../../assets/graphics/Boats/Chapter_1.svg";
import boatShadowImg from "../../assets/graphics/Boats/Chapter_1_Shadow.svg";
import ffImg from "../../assets/graphics/Fireflies/Chapter_1.svg";
import topographyImg from "../../assets/graphics/Topography.svg";
import wavesImg from "../../assets/graphics/Waves.svg";
import nextArrowImg from "../../assets/icons/NextArrow_1.svg";

function ChapterOne() {
  const navigate = useNavigate();
  const [rendered, setRendered] = useState(false);
  const [page, setPage] = useState(0);
  const PAGES = {
    "page 1": 0,
    "page 2": 1,
    "page 3": 2,
    "transition": 3,
  };
  const CONTENT = [
    {
      text: "מפל הוא זרם מים שנופל מגובה כתוצאה מהפרשי גובה בטופוגרפיה.",
      img: topographyImg,
      left: "75%"
    },
    {
      text: "מפלים נוצרים בעיקר משחיקת סלעים לאורך שנים על ידי מים זורמים.",
      img: wavesImg,
      left: "45%"
    },
    {
      text: "ניתן למצוא מפלים בנחלים, נהרות ואפילו בתוך מערות.",
      img: null,
      left: "25%"
    },
    {
      left: "-20%"
    },
  ];

  /** useEffect: Loading function **/
  useEffect(() => {
    setRendered(true);
  }, []);

  /** handlePage: Handles passage between pages. */
  const handlePage = () => {
    setPage(page + 1);
    if (page === PAGES["transition"] - 1) {
      document.getElementById("transition").addEventListener("animationend", () => {
        navigate("/ChapterTwo");
      });
    }
  };

  return (
    <>
      <div className={styles.bg}>
        {/* TEXT */}
        <div className={styles.text}>
          <span id="title" className={`${styles.title} ${page === PAGES["transition"] && styles["fade-out"]}`}>
            מהו מפל ואיך הוא נוצר?
          </span>

          <img
            src={CONTENT[page]["img"]}
            className={styles["explanation-img"]}
          />

          <p
            id="explanation"
            className={`${styles.explanation} ${page === PAGES["transition"] && styles["fade-out"]}`}>
            {CONTENT[page]["text"]}
          </p>
        </div>

        {/* BOAT AND WATER */}
        <div id="boat-wrapper" className={styles["boat-wrapper"]} style={{ left: rendered && CONTENT[page].left }}>
          <div className={styles.water}>
            <img src={boatShadowImg} className={styles["boat-shadow"]} />
          </div>
          <img src={boatImg} className={styles.boat} />
          <img src={ffImg} className={styles.ff} />
        </div>

        {/* NEXT ARROW */}
        <img
          src={nextArrowImg}
          style={{ cursor: page === PAGES["transition"] ? "auto" : "pointer" }}
          onClick={handlePage}
          className={`${styles["next-arrow"]} ${page === PAGES["transition"] && styles["fade-out"]}`}
        />

        {/* TRANSITION */}
        <div
          id="transition"
          className={`${styles.transition}
                                                ${page === PAGES["transition"] && styles["fade-in"]}`}
        />
      </div>
    </>
  );
}
export default ChapterOne;
