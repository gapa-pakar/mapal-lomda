import styles from "./Ending.module.css";
import ffImg from "../../assets/graphics/Fireflies/Chapter_2.svg";
import { MouseParallax } from "react-just-parallax";


function Ending() {
    return (
        <>
            <div className={styles.bg}>
                <MouseParallax isAbsolutelyPositioned>
                    <img src={ffImg} className={styles.ff} />
                </MouseParallax>
                <div className={styles.title}>
                    <span className={styles.bold}>
                        כל הכבוד!
                    </span>
                    <span>
                        סיימת את הלומדה!
                    </span>
                </div>
            </div>
        </>
    )
}

export default Ending