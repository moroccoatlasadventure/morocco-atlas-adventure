import styles from "./TourContent.module.css";
import { FaStar, FaCheck } from "react-icons/fa";

const TourContent = ({ tour }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.tourHeader}>
          <h1 className={styles.mainTitle}>
            {tour.title} | {tour.subtitle}
          </h1>
          <div className={styles.rating}>
            <span className={styles.ratingBadge}>{tour.rating} RATING</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview of the {tour.title}</h2>
          <p className={styles.description}>{tour.overview}</p>
        </div>

        {tour.highlights && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              - Highlights of {tour.duration} Sahara tour from Marrakech and
              Back
            </h2>
            <ul className={styles.list}>
              {Array.isArray(tour.highlights) &&
                tour.highlights.map((highlight, index) => (
                  <li key={index} className={styles.listItem}>
                    {highlight}
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Includes</h2>
          <ul className={styles.list}>
            {Array.isArray(tour.includes) &&
              tour.includes.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <FaCheck className={styles.checkIcon} />
                  {item}
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Not included</h2>
          <ul className={styles.list}>
            {Array.isArray(tour.notIncluded) &&
              tour.notIncluded.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Itinerary of the {tour.title}</h2>
          {Array.isArray(tour.itinerary) &&
            tour.itinerary.map((day, index) => (
              <div key={index} className={styles.daySection}>
                <h3 className={styles.dayTitle}>
                  Day {day.day}: {day.title}
                </h3>
                <p className={styles.dayDescription}>{day.description}</p>
                <div className={styles.dayImage}>
                  <img src={`${import.meta.env.BASE_URL}${day.image}`} alt={`Day ${day.day}`} />
                </div>
              </div>
            ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.gallery}>
            {Array.isArray(tour.gallery) &&
              tour.gallery.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                  <img src={image} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourContent;
