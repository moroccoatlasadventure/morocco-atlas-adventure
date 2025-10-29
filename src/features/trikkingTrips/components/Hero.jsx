import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import { FaClock, FaMountain, FaMapMarkerAlt, FaRulerVertical, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const iconMap = {
  FaClock: <FaClock />,
  FaMountain: <FaMountain />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaRulerVertical: <FaRulerVertical />,
  FaSun: <FaSun />,
};

const Hero = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${data.heroImg})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.subtitle}>{data.subtitle}</p>

        <div className={styles.stats}>
          {data.stats.map((stat, index) => (
            <div key={index} className={styles.statBox}>
              {iconMap[stat.icon]}
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statValue}>{stat.value}</div>
            </div>
          ))}
        </div>
        <button
          className={styles.button}
          onClick={() => navigate("/contact")}
        >
          {t("trekkingTrips.bookButton")}
        </button>
      </div>
    </div>
  );
};

export default Hero;
