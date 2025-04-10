import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "../Opening/Opening.module.css";
import splashImg from "../../assets/graphics/Splash.svg";
import ffImgOne from "../../assets/graphics/Fireflies/Opening_1.svg";
import ffImgTwo from "../../assets/graphics/Fireflies/Opening_2.svg";

function Opening() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const PAGES = {
    "page 1": 0,
    transition: 1,
  };

  /** handleStart: Navigates to the next page with a transition. */
  const handleStart = () => {
    setPage(page + 1);
    setTimeout(() => {
      navigate("/ChapterOne");
    }, 3000);
  };

  return (
    <>
      <div className={styles.bg}>
        {/* Title */}
        <p className={styles.title}>
          <span>
            <b>מפלים</b>
          </span>
          <span>בארץ ובעולם</span>

          {/* Start button */}
          <button
            id="start-btn"
            className={`${styles["start-btn"]} 
                    ${page === PAGES["transition"] && styles["start-btn-anim"]}`}
            onClick={page === PAGES["transition"] ? null : handleStart}
          >
            התחל
          </button>
        </p>

        {/* Effects */}
        <img src={splashImg} className={styles.splash} />
        <img src={ffImgOne} className={styles["ff-one"]} />
        <img src={ffImgTwo} className={styles["ff-two"]} />
      </div>

      {/* Transition */}
      <div
        className={`${styles["transition-one"]} 
            ${page === PAGES["transition"] && styles["fade-in"]}`}
      />
      <div
        className={`${styles["transition-two"]} 
            ${page === PAGES["transition"] && styles["fade-in"]}`}
      />
    </>
  );
}
export default Opening;
