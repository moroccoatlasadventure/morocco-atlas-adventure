import { useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { useTranslation } from "react-i18next";

const HeroSection = ({ heroImage, titleKey, highlightedKey, descriptionKey }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img src={heroImage} alt="Hero" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.content}>
        <h1>
          {t(titleKey)} <span>{t(highlightedKey)}</span>
        </h1>
        <p>{t(descriptionKey)}</p>
        <div className={styles.buttons}>
          <button className={styles.primary} onClick={handleClick}>
            {t('tourDetails.cta.primaryButton', 'Book Your Adventure')}
          </button>
          <button className={styles.secondary} onClick={handleClick}>
            {t('tourDetails.cta.secondaryButton', 'Contact Us')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
