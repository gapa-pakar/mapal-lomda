import styles from "./ChapterFour.module.css";
import ffImg from "../../assets/graphics/Fireflies/Chapter_4.png";

function Marker(props) {
  const { ffTop, ffLeft, handleClick, ffId, displayCard } = props;
  const ffStyle = {
    top: ffTop,
    right: ffLeft,
  };

  return (
    <>
      <img
        id={ffId}
        style={ffStyle}
        className={styles.ff}
        src={ffImg}
        onClick={handleClick}
      />
      {displayCard && <span>test</span>}
    </>
  );
}
export default Marker;
