import styles from "./IndividualTourHero.module.css";
import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const IndividualTourHero = ({ tour }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={tour.heroImage} alt={tour.title} />
        <div className={styles.overlay}>
          <div className={styles.breadcrumb}>
            HOME &gt; TOURS FROM MARRAKECH &gt; {tour.title.toUpperCase()}
          </div>
          <h1 className={styles.title}>{tour.title}</h1>
        </div>
      </div>

      <div className={styles.infoBar}>
        <div className={styles.tourInfo}>
          <div className={styles.infoItem}>
            <FaClock className={styles.icon} />
            <span>Duration : {tour.duration}</span>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Start From : {tour.startFrom}</span>
          </div>
          <div className={styles.infoItem}>
            <FaCalendarAlt className={styles.icon} />
            <span>Availability : {tour.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualTourHero;
