import { FaHiking, FaClock, FaUtensils } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./Timeline.module.css";

const Timeline = ({ steps }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.sectionTitle}>{t("trekkingTrips.itineraryTitle")}</h2>

      {/* Wrapper timeline items */}
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine} /> {/* Ligne verticale */}
        {steps.map((step, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.card}>
              <h3 className={styles.dayTitle}>{step.title}</h3>
              {step.description && <p className={styles.description}>{step.description}</p>}
              <div className={styles.infoRow}>
                {step.walkingTime && <span className={styles.info}><FaHiking /> {step.walkingTime}</span>}
                {step.meals && <span className={styles.info}><FaUtensils /> {t("trekkingTrips.mealsLabel")}: {step.meals}</span>}
                {step.time && <span className={styles.info}><FaClock /> {step.time}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Timeline;