import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChapterFour.module.css";
import Marker from "./Marker.jsx";
import BoatImg from "../../assets/graphics/Boats/Chapter_4.png";
import nextArrowImg from "../../assets/icons/NextArrow_1.svg";
import bgImg from "../../assets/bgs/Chapter_4.png";


function ChapterFour() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [card, setCard] = useState(false);
  const PAGES = {
    "page 1": 0,
    transition: 1,
  };
  const CONTENT = [
    {
      id: "0",
      title: "מפלי ויקטוריה",
      description: '"העשן הרועם"',
      ffTop: "60%",
      ffLeft: "39%",
      cardTop: "45%",
      cardLeft: "53%",
      anim: "victoria-anim",
    },
    {
      id: "1",
      title: "מפלי הניאגרה",
      description: "אחד המפלים המפורסמים בעולם.",
      ffTop: "20%",
      ffLeft: "72%",
      cardTop: "5%",
      cardLeft: "15%",
      anim: "niagara-anim",
    },
    {
      id: "2",
      title: "גולפוס",
      description: "אחד המפלים המרשימים באירופה.",
      ffTop: "15%",
      ffLeft: "57%",
      cardTop: "0%",
      cardLeft: "30%",
      anim: "gullfus-anim",
    },
    {
      id: "3",
      title: "איגואסו",
      description: "מערכת מפלים רחבת ידיים באמריקה הדרומית.",
      ffTop: "65%",
      ffLeft: "70%",
      cardTop: "50%",
      cardLeft: "15%",
      anim: "iguaso-anim",
    },
    {
      id: "4",
      title: "מפל אנחל",
      description: "המפל הגבוה בעולם (979 מטר)",
      ffTop: "45%",
      ffLeft: "72%",
      cardTop: "32%",
      cardLeft: "22%",
      anim: "angel-anim",
    },
    {
      id: "5",
      title: "מפל התנור",
      description: "אחד המפלים היפים בגליל העליון.",
      ffTop: "31%",
      ffLeft: "31%",
      cardTop: "17%",
      cardLeft: "56%",
      anim: "tanor-anim",
    },
  ];

  /** handleDisplayCard: Updates the information card and related animations **/
  const handleDisplayCard = (e) => {
    if (card === false || card !== Number(e.target.id)) {
      setCard(Number(e.target.id));
    } else {
      setCard(false);
    }
  }

  /** handlePage: Handles passage between pages. **/
  const handlePage = () => {
    setPage(page + 1);
    setTimeout(() => {
      navigate("/Questions");
    }, 2000);
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={`${styles.title} ${page === PAGES["transition"] && styles["slide-top"]}`}>
          לחץ על המפל שתרצה לשוט אליו
        </div>
        <div className={`${styles.map} ${page === PAGES["transition"] && styles["slide-bottom"]}`}>
          <div className={styles["ff-wrap"]}>
            {CONTENT.map((item, index) => (
              <Marker
                key={index}
                ffId={item.id}
                ffTop={item.ffTop}
                ffLeft={item.ffLeft}
                handleClick={handleDisplayCard}
              />
            ))}
          </div>
          <div id="card" className={styles.card} style={{
            opacity: card !== false ? "100%" : "0%",
            top: card !== false ? CONTENT[card].cardTop : "0%",
            left: card !== false ? CONTENT[card].cardLeft : "0%"
          }}>
            <div id="card-title" className={styles["card-title"]}>
              {card !== false ? CONTENT[card].title : null}
            </div>
            <div id="card-desc" className={styles["card-desc"]}>
              {card !== false ? CONTENT[card].description : null}
            </div>
          </div>

          {/* BOAT */}
          <div id="boat" className={`${styles["boat-wrapper"]} ${card !== false ? styles[`${CONTENT[card].anim}`] : null}`}>
            <img className={styles.boat} src={BoatImg} />
          </div>
        </div>
      </div>

      {/* NEXT ARROW */}
      <img
        id="next-arrow"
        src={nextArrowImg}
        className={styles["next-arrow"]}
        style={{ cursor: page === PAGES["transition"] ? "auto" : "pointer" }}
        onClick={page !== PAGES["transition"] ? handlePage : null}
      />

      {/* TRANSITION */}
      <div className={`${styles.transition} ${page === PAGES["transition"] && styles["fade-in"]}`}
        style={{ backgroundImage: page === PAGES["transition"] && `url(${bgImg})` }} />
    </>
  );
}
export default ChapterFour;
