import styles from "./ChapterThree.module.css";
import WaterfallEffectImg from "../../assets/graphics/WaterfallEffect.svg";

function Waterfall(props) {
  const { title, location, description } = props;

  return (
    <>
      <div className={styles.waterfall}>
        <span className={styles["waterfall-title"]}>{title}</span>
        <span className={styles["waterfall-location"]}>{location}</span>
        <span className={styles["waterfall-description"]}>{description}</span>
        <img className={styles["waterfall-effect"]} src={WaterfallEffectImg} />
      </div>
    </>
  );
}
export default Waterfall;
