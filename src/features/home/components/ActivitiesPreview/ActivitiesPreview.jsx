import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./ActivitiesPreview.module.css";
import { useAutoSlide } from "../ToursSection/hook/useAutoSlide";

const ActivitiesPreview = () => {
  const { t } = useTranslation();

  const activities = [
    {
      id: "quad-biking",
      titleKey: "activities.quadBiking.title",
      descriptionKey: "activities.quadBiking.description",
      image: "/images/activities/quad.jpg",
      duration: "2-4 Hours",
      durationKey: "activities.quadBiking.duration",
      priceMAD: "400-800",
      featuresKey: "activities.quadBiking.features",
      icon: "motorcycle",
    },
    {
      id: "camel-trekking",
      titleKey: "activities.camelTrekking.title",
      descriptionKey: "activities.camelTrekking.description",
      image: "/images/activities/camel.jpg",
      duration: "1-3 Hours",
      durationKey: "activities.camelTrekking.duration",
      priceMAD: "300-600",
      featuresKey: "activities.camelTrekking.features",
      icon: "sun",
    },
    {
      id: "buggy-tours",
      titleKey: "activities.buggyTours.title",
      descriptionKey: "activities.buggyTours.description",
      image: "/images/activities/buggy.jpg",
      duration: "2-4 Hours",
      durationKey: "activities.buggyTours.duration",
      priceMAD: "800-1,200",
      featuresKey: "activities.buggyTours.features",
      icon: "car",
    },
    {
      id: "4x4-expeditions",
      titleKey: "activities.fourWheelDrive.title",
      descriptionKey: "activities.fourWheelDrive.description",
      image: "/images/activities/4x4.jpg",
      duration: "Full Day",
      durationKey: "activities.fourWheelDrive.duration",
      priceMAD: "1,200-2,000",
      featuresKey: "activities.fourWheelDrive.features",
      icon: "truck",
    },
    {
      id: "hot-air-balloon",
      titleKey: "activities.hotAirBalloon.title",
      descriptionKey: "activities.hotAirBalloon.description",
      image: "/images/activities/air-balloon.jpg",
      duration: "4-5 Hours",
      durationKey: "activities.hotAirBalloon.duration",
      priceMAD: "2,200-2,800",
      featuresKey: "activities.hotAirBalloon.features",
      icon: "cloud",
    },
    {
      id: "mountain-biking",
      titleKey: "activities.mountainBiking.title",
      descriptionKey: "activities.mountainBiking.description",
      image: "/images/activities/mountain-biking.jpg",
      duration: "Half/Full Day",
      durationKey: "activities.mountainBiking.duration",
      priceMAD: "600-1,000",
      featuresKey: "activities.mountainBiking.features",
      icon: "bicycle",
    },
  ];

  const { activeIndex, goToIndex, startAutoSlide, stopAutoSlide } = useAutoSlide(activities.length);

  const handleImageError = (e) => {
    e.target.style.backgroundImage = "url('/images/placeholder.jpg')";
  };

  return (
    <section className={styles.activitiesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>
            <i className="fas fa-compass"></i>
            {t("activities.badge")}
          </span>
          <h2 className={styles.title}>{t("activities.title")}</h2>
          <p className={styles.subtitle}>{t("activities.subtitle")}</p>
        </div>

        {/* Activities Carousel */}
        <div className={styles.carouselWrapper}>
          {/* Left Navigation Button */}
          <button
            className={styles.navButton}
            onClick={() => goToIndex((activeIndex - 1 + activities.length) % activities.length)}
            aria-label="Previous activity"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Activities Container */}
          <div
            className={styles.activitiesContainer}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div className={styles.activityCard}>
              {/* Image Section */}
              <div
                className={styles.imageWrapper}
                style={{ backgroundImage: `url(${activities[activeIndex].image})` }}
                onError={handleImageError}
              >
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Content Section */}
              <div className={styles.cardContent}>
                <div className={styles.mainContent}>
                  <h3 className={styles.activityTitle}>
                    {t(activities[activeIndex].titleKey)}
                  </h3>
                  <p className={styles.activityDescription}>
                    {t(activities[activeIndex].descriptionKey)}
                  </p>

                  {/* Features List */}
                  <ul className={styles.featuresList}>
                    {t(activities[activeIndex].featuresKey, { returnObjects: true }).map(
                      (feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i>
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Footer with Price & CTA */}
                <div className={styles.cardFooter}>
                  <Link
                    to="contact"
                    className={styles.bookButton}
                  >
                    <span>{t("activities.bookNow")}</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            className={styles.navButton}
            onClick={() => goToIndex((activeIndex + 1) % activities.length)}
            aria-label="Next activity"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className={styles.dotsContainer}>
          {activities.map((_, index) => (
            <span
              key={index}
              onClick={() => goToIndex(index)}
              className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;
