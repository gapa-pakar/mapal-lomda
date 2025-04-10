import styles from "./ChapterTwo.module.css";

function ID(props) {
  const { title, description, index } = props;

  return (
    <>
      <div className={styles.id}>
        <span className={styles["id-title"]}>
          <div className={styles.moon}>{index}</div>
          {title}
        </span>
        <p className={styles["id-description"]}>{description}</p>
      </div>
    </>
  );
}
export default ID;
