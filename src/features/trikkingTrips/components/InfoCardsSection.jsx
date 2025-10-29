import { FaStar, FaGift, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import styles from "./InfoCardsSection.module.css";

const iconMap = {
  FaStar: <FaStar />,
  FaGift: <FaGift />,
};

const InfoCardsSection = ({ datas }) => {
  return (
    <div className={styles.container}>
      {datas.map((data, index) => {
        // Déterminer si la carte est "Included" ou "Not Included"
        const isIncluded = (data.title).toLowerCase().includes("included");

        return (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.icon}>{iconMap[data.icon]}</span>
              <h3 className={styles.title}>{data.title}</h3>
            </div>
            <ul className={styles.list}>
              {(data.items)?.map((item, idx) => (
                <li key={idx}>
                  {data.included ? (
                    <FaCheckCircle className={styles.bulletIcon} />
                  ) : (
                    <FaTimesCircle className={`${styles.bulletIcon} ${styles.red}`} />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCardsSection;
