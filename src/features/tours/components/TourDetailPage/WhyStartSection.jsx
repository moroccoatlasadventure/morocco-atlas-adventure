import styles from "./WhyStartSection.module.css";
import { FaMountain, FaLandmark, FaUtensils } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const iconMap = {
  mountain: FaMountain,
  landmark: FaLandmark,
  utensils: FaUtensils
};

const WhyStartSection = ({ image, features, badgeKey, highlightedKey, descriptionKey }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>
          {t('tourDetails.whyStart.title', 'Why Start Your Journey from ')}<span>{t(highlightedKey)}</span>?
        </h2>
        <p>{t(descriptionKey)}</p>
        <div className={styles.features}>
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <div className={styles.feature} key={idx}>
                <Icon className={styles.icon} />
                <div>
                  <h4>{t(feature.titleKey)}</h4>
                  <p>{t(feature.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt={t(highlightedKey)} className={styles.image} />
        <div className={styles.badge}>{t(badgeKey)}</div>
      </div>
    </section>
  );
};

export default WhyStartSection;
