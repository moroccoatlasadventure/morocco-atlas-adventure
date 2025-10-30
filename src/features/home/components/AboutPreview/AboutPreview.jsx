import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./AboutPreview.module.css";

const AboutPreview = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.aboutSection} aboutPreview`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>
            <i className="fas fa-mountain"></i>
            {t("about.badge")}
          </span>
          <h2 className={styles.title}>{t("about.title")}</h2>
          <p className={styles.subtitle}>{t("about.subtitle")}</p>
        </div>

        {/* Main Content - Split Layout */}
        <div className={styles.contentWrapper}>
          {/* Left Side - Story */}
          <div className={styles.storySection}>
            <h3 className={styles.storyTitle}>{t("about.story.title")}</h3>
            <div className={styles.storyContent}>
              <p>{t("about.story.paragraph1")}</p>
              <p>{t("about.story.paragraph2")}</p>
              <p>{t("about.story.paragraph3")}</p>
            </div>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>4</div>
                <div className={styles.highlightLabel}>{t("about.highlights.destinations")}</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>4</div>
                <div className={styles.highlightLabel}>{t("about.highlights.tourPlans")}</div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>5+</div>
                <div className={styles.highlightLabel}>{t("about.highlights.treks")}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className={styles.featuresSection}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-city"></i>
              </div>
              <h4 className={styles.featureTitle}>{t("about.features.cityTours.title")}</h4>
              <p className={styles.featureDescription}>{t("about.features.cityTours.description")}</p>
              <ul className={styles.featureList}>
                <li><i className="fas fa-check"></i> {t("about.features.cityTours.item1")}</li>
                <li><i className="fas fa-check"></i> {t("about.features.cityTours.item2")}</li>
                <li><i className="fas fa-check"></i> {t("about.features.cityTours.item3")}</li>
                <li><i className="fas fa-check"></i> {t("about.features.cityTours.item4")}</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-hiking"></i>
              </div>
              <h4 className={styles.featureTitle}>{t("about.features.trekking.title")}</h4>
              <p className={styles.featureDescription}>{t("about.features.trekking.description")}</p>
              <ul className={styles.featureList}>
                <li><i className="fas fa-check"></i> {t("about.features.trekking.item1")}</li>
                <li><i className="fas fa-check"></i> {t("about.features.trekking.item2")}</li>
                <li><i className="fas fa-check"></i> {t("about.features.trekking.item3")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <i className="fas fa-map-marked-alt"></i>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>2-10</span>
              <span className={styles.statLabel}>{t("about.stats.dayOptions")}</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <i className="fas fa-users"></i>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>{t("about.stats.localGuides")}</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <i className="fas fa-star"></i>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>5.0</span>
              <span className={styles.statLabel}>{t("about.stats.rating")}</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <i className="fas fa-shield-alt"></i>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>{t("about.stats.support")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
