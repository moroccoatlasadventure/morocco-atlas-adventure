import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Début de la section
      });
    }
  };
  
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('hero.title')}</h1>
          <p className={styles.subtitle}>
            {t('hero.subtitle')}
          </p>
          <div className={styles.buttons}>
            <button
              className={styles.primaryBtn}
              onClick={() => scrollToSection(".trekkingTripsPreview")}
            >
              {t('hero.cta')}
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => scrollToSection(".toursSection")}
            >
              {t('hero.viewTours')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
