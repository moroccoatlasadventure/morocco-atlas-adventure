import { useNavigate } from "react-router-dom";
import styles from "./ToursSection.module.css";
import { useTranslation } from "react-i18next";

const ToursSection = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = (tour) => {
    // Check if this is a specific tour that has individual detail page
    const individualTourIds = [
      "marrakech-zagora-2days",
      "marrakech-merzouga-3days", 
      "marrakech-merzouga-8days",
      "marrakech-casablanca-11days",
      "fes-marrakech-2days",
      "fes-casablanca-3days",
      "fes-marrakech-7days",
      "fes-marrakech-9days",
      "tangier-marrakech-4days",
      "tangier-marrakech-8days",
      "tangier-marrakech-12days",
      "casablanca-fes-3days",
      "casablanca-marrakech-7days",
      "casablanca-marrakech-15days"
    ];
    
    if (tour.id && individualTourIds.includes(tour.id)) {
      navigate(`/tour-detail/${tour.id}`);
    } else {
      navigate("/contact");
    }
  };

  // Unified card title logic: use titleKey (for i18n-ready data), else fallback to old id-based structure
  const getTourTitle = (tour) => tour.titleKey ? t(tour.titleKey) : t(`homepage_tours.cards.${tour.id}.title`);

  return (
    <section className={`${styles.toursSection} toursSection`}>
      <h2 className={styles.title}>{t('homepage_tours.sectionTitle')}</h2>

      <div className={styles.descriptionBox}>
        <p>{t('homepage_tours.description1')}</p>
        <p>{t('homepage_tours.description2')}</p>
        <p>{t('homepage_tours.description3')}</p>
      </div>

      <div
        className={styles.cardsContainer}
      >
        {data.map((tour, idx) => (
          <div key={tour.id || idx} className={styles.card} onClick={() => handleCardClick(tour)}>
            {tour.days && <span className={styles.daysBanner}>{tour.days}</span>}
            <img src={tour.image} alt={getTourTitle(tour)} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{getTourTitle(tour)}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;
