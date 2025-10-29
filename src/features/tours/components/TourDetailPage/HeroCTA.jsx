import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./HeroCTA.module.css";
import { useTranslation } from "react-i18next";

const HeroCTA = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.heroContainer}>
      <h2 className={styles.title}>{t('tourDetails.cta.title')}</h2>
      <p className={styles.subtitle}>{t('tourDetails.cta.subtitle')}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton} onClick={handleClick}>
          <FaCalendarAlt className={styles.icon} /> {t('tourDetails.cta.button')}
        </button>
      </div>
    </div>
  );
};

export default HeroCTA;
