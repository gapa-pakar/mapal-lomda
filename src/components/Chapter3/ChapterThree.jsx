import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChapterThree.module.css";
import Waterfall from "./Waterfall.jsx";
import BoatImg from "../../assets/graphics/Boats/Chapter_3.svg";
import ffImg from "../../assets/graphics/Fireflies/Chapter_3.svg";
import NextArrowImg from "../../assets/icons/NextArrow_1_Alt.svg";

function ChapterThree() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const PAGES = {
    "page 1": 0,
    transition: 1,
  };
  const CONTENT = [
    {
      title: "גולפוס",
      location: "איסלנד",
      description: "אחד המפלים המרשימים ביותר באירופה, נמצא על נהר Hvítá.",
    },
    {
      title: "איגואסו",
      location: "ברזיל/ארגנטינה",
      description: "מערכת מפלים רחבת ידיים באמריקה הדרומית, אחת מהיפות בעולם",
    },
    {
      title: "מפלי ויקטוריה",
      location: "זמביה/זימבבואה",
      description: '"העשן הרועם", מפל אדיר על נהר הזמבזי באפריקה',
    },
    {
      title: "מפל האנחל",
      location: "ונצואלה",
      description:
        "המפל הגבוה בעולם (979 מטר), נופל מצוק אדיר בג'ונגלים של ונצואלה.",
    },
    {
      title: "מפלי הניאגרה",
      location: 'ארה"ב/קנדה',
      description:
        'אחד המפלים המפורסמים בעולם, סדרה של שלושה מפלים על גבול קנדה-ארה"ב',
    },
  ];

  /** handlePage: Handles passage between pages. */
  const handlePage = () => {
    setPage(page + 1);
    document.getElementById("next-arrow").style.cursor = "auto";
    document.getElementById("waterfalls").style.height = "0%";
    document.getElementById("title").style.marginTop = "-20vh";
    setTimeout(() => {
      navigate("/ChapterFour");
    }, 3000);
  };

  return (
    <>
      <div className={styles.bg}>
        <div id="title" className={styles.title}>
          מפלים מפורסמים בעולם
        </div>

        {/* WATERFALLS */}
        <div id="waterfalls" className={styles.waterfalls}>
          {CONTENT.map((item, index) => {
            return (
              <Waterfall
                key={index}
                title={item.title}
                location={item.location}
                description={item.description}
              />
            );
          })}
        </div>

        {/* BOAT AND OCEAN */}
        <div className={styles.ocean}>
          <div id="boat-wrapper" className={styles["boat-wrapper"]}>
            <img className={styles.boat} src={BoatImg} />
            <img className={styles.ff} src={ffImg} />
          </div>
        </div>
      </div>

      {/* NEXT ARROW */}
      <img
        id="next-arrow"
        src={NextArrowImg}
        className={`${styles["next-arrow"]} 
                                ${page === PAGES["transition"] && styles["fade-out"]}`}
        onClick={page !== PAGES["transition"] ? handlePage : null}
      />

      {/* TRANSITION */}
      <div className={styles.transition} />
    </>
  );
}
export default ChapterThree;
