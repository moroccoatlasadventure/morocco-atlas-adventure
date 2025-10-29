import { FaShoePrints, FaUmbrella, FaBed, FaWater, FaSuitcase, FaSun, FaMedkit, FaCampground, FaUtensils, FaTint, FaUserTie, FaCaravan } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { GiCamel } from "react-icons/gi";
import styles from "./TrekDetails.module.css";

const iconMap = {
  FaShoePrints: <FaShoePrints />,
  FaUmbrella: <FaUmbrella />,
  FaBed: <FaBed />,
  FaWater: <FaWater />,
  FaSuitcase: <FaSuitcase />,
  FaSun: <FaSun />,
  FaMedkit: <FaMedkit />,
  FaCampground: <FaCampground />,
  FaUtensils: <FaUtensils />,
  GiCamel: <GiCamel />,
  FaTint: <FaTint />,
  FaUserTie: <FaUserTie />,
  FaCaravan: <FaCaravan />
};

const TrekDetails = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('trekkingTrips.equipmentTitle')}</h2>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{iconMap[item.icon]}</div>
            <h4 className={styles.label}>{item.label}</h4>
            <p className={styles.value}>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrekDetails;
