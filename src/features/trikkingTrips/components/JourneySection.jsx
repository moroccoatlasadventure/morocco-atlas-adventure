import styles from "./JourneySection.module.css";

const JourneySection = ({ data }) => {

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.description1}</p>
        <p className={styles.text}>{data.description2}</p>
      </div>

      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.title} className={styles.image} />
        <div className={styles.elevationBox}>
          <span className={styles.elevationValue}>{data.elevation}</span>
          <span className={styles.elevationLabel}>{data.elevationLabel}</span>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
