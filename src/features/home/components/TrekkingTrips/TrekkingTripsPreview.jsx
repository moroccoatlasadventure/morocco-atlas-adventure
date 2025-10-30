import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./TrekkingTripsPreview.module.css";

const TrekkingTripsPreview = () => {
  const { t } = useTranslation();
  const trekkingTrips = [
    {
      id: "atlas-mountain",
      titleKey: "trekkingTrips.cards.atlas.title",
      programs: [
        { id: "oukaimden-imlil", icon: "fas fa-mountain" },
        { id: "berber-villages", icon: "fas fa-tree" },
        { id: "toubkal", icon: "fas fa-hiking" },
      ],
      image: "/images/trekkingTrips/3.jpg",
      badgeKey: "trekkingTrips.badges.mostPopular",
      badgeColor: "popular",
      imagePosition: "left",
    },
    {
      id: "rif-mountains",
      titleKey: "trekkingTrips.cards.rif.title",
      programs: [
        { id: "chefchaouen-akchour", icon: "fas fa-water" },
        { id: "from-chefchaouen", icon: "fas fa-tree" },
      ],
      image: "/images/trekkingTrips/2.jpg",
      badgeKey: "trekkingTrips.badges.cultural",
      badgeColor: "cultural",
      imagePosition: "right",
    },
    {
      id: "sahara-trek",
      titleKey: "trekkingTrips.cards.sahara.title",
      programs: [
        { id: "merzouga-two-days", icon: "fas fa-sun" },
        { id: "merzouga-three-days", icon: "fas fa-campground" },
        { id: "merzouga-seven-days", icon: "fas fa-hiking" },
      ],
      image: "/images/trekkingTrips/4.jpg",
      badgeKey: "trekkingTrips.badges.advanced",
      badgeColor: "advanced",
      imagePosition: "left",
    },
  ];

  return (
    <section className={styles.trekkingSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>
            <i className="fas fa-hiking"></i>
            {t("trekkingTrips.badge")}
          </span>
          <h2 className={styles.title}>{t("trekkingTrips.title")}</h2>
        </div>

        {/* Trek Cards */}
        <div className={styles.treksContainer}>
          {trekkingTrips.map((trek) => (
            <div 
              key={trek.id} 
              className={`${styles.trekCard} ${trek.imagePosition === 'right' ? styles.imageRight : ''}`}
            >
              {/* Image */}
              <div className={styles.imageSection}>
                <div 
                  className={styles.trekImage}
                  style={{ backgroundImage: `url(${trek.image})` }}
                >
                  <div className={styles.imageOverlay}></div>
                  <div className={`${styles.trekBadge} ${styles[trek.badgeColor]}`}>
                    {t(trek.badgeKey)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={styles.contentSection}>
                <h3 className={styles.trekTitle}>{t(trek.titleKey)}</h3>

                {/* Programs Title */}
                <h4 className={styles.programsTitle}>{t("trekkingTrips.programsTitle")}</h4>

                {/* Programs */}
                <div className={styles.programsSection}>
                  {trek.programs.map((program) => (
                    <Link 
                      to={`/trekking/${program.id}`} 
                      key={program.id} 
                      className={styles.programCard}
                    >
                      <i className={program.icon}></i>
                      <span>{t(`trekkingTrips.programTitles.${program.id}`)}</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekkingTripsPreview;
