import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChapterTwo.module.css";
import ID from "./ID.jsx";
import ffImg from "../../assets/graphics/Fireflies/Chapter_2.svg";
import ffImgTwo from "../../assets/graphics/Fireflies/Chapter_2_2.svg";
import ffImgThree from "../../assets/graphics/Fireflies/Chapter_2_3.svg";
import ffImgFour from "../../assets/graphics/Fireflies/Chapter_2_4.svg";
import ffImgFive from "../../assets/graphics/Fireflies/Chapter_2_5.svg";
import nextArrowImg from "../../assets/icons/NextArrow_1.svg";
import { MouseParallax } from "react-just-parallax";

function ChapterTwo() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const PAGES = {
    "page 1": 0,
    "page 2": 1,
    transition: 2,
  };
  const CONTENT = [
    [
      {
        id: 1,
        title: "מפל סער",
        description: "נמצא ברמת הגולן, פעיל בעיקר בחורף ובאביב לאחר הגשמים.",
      },
      {
        id: "2",
        title: "מפל גמלא",
        description:
          "המפל הגבוה ביותר בישראל (51 מטרים). חלק משמורת גמלא ברמת הגולן",
      },
      {
        id: 3,
        title: "מפל עיט",
        description: "מפל עונתי ברמת הגולן הנמצא בנחל עיט.",
      },
    ],
    [
      {
        id: 4,
        title: "מפל התנור",
        description: "אחד המפלים היפים בגליל העליון, נופל מתוך סלע גיר קשה.",
      },
      {
        id: 5,
        title: "מפל השחור",
        description: "מפל קטן אך יפהפה שנמצא בנחל זוויתן.",
      },
    ],
  ];

  /** getInfoIndex: Returns the index location of the text to be displayed on screen.
        Accounts for the transition page by repeating the previous page's index. **/
  function getInfoIndex() {
    if (page < PAGES["transition"]) {
      return page;
    } else {
      return 1;
    }
  }

  /** handlePage: Handles passage between pages. */
  const handlePage = () => {
    setPage(page + 1);

    // Last page reached, run transition
    if (page === PAGES["transition"] - 1) {
      document.getElementById("next-arrow").style.cursor = "auto";
      setTimeout(() => {
        navigate("/ChapterThree");
      }, 5000);
    }
  };

  return (
    <>
      <div className={styles.bg}>
        <MouseParallax isAbsolutelyPositioned>
          <img src={ffImg} className={styles["ff"]} />
          <img src={ffImgTwo} className={styles["ff-2"]} />
        </MouseParallax>
        <span className={styles.title}>מפלים בישראל</span>
        <p className={styles.explanation}>
          ישראל אמנם לא ידועה כממלכת המפלים, אך יש בה מספר מפלים ייחודיים:
        </p>
        <div className={styles.ids}>
          {CONTENT[getInfoIndex()].map((item, index) => (
            <ID
              key={index}
              title={item.title}
              description={item.description}
              index={item.id}
            />
          ))}
        </div>

        {/* NEXT ARROW */}
        <img
          id="next-arrow"
          src={nextArrowImg}
          className={styles["next-arrow"]}
          onClick={page !== PAGES["transition"] ? handlePage : null}
        />

        {/* TRANSITION */}
        <img
          src={ffImgThree}
          className={`${styles["ff-3"]}
                                                ${page === PAGES["transition"] && styles["offscreen"]}`}
        />
        <img
          src={ffImgFour}
          className={`${styles["ff-4"]}
                                                ${page === PAGES["transition"] && styles["offscreen"]}`}
        />
        <img
          src={ffImgFive}
          className={`${styles["ff-5"]}
                                                ${page === PAGES["transition"] && styles["offscreen"]}`}
        />
        <div
          className={`${styles.transition}
                                ${page === PAGES["transition"] && styles["fade-in"]}`}
        />
      </div>
    </>
  );
}
export default ChapterTwo;
