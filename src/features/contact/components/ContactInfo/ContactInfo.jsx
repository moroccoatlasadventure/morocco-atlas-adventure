import callIcon from '/public/images/icons/call.png';
import mailIcon from '/public/images/icons/mail.png';
import styles from './ContactInfo.module.css';

const ContactInfo = () => (
  <div className={styles.contactInfoWrapper}>
    <div className={styles.infoCard}>
      <img src={callIcon} alt="Call Icon" className={styles.icon} />
      <div className={styles.infoContent}>
        <h3>Call Us</h3>
        <p>+212 123 456 789</p>
      </div>
    </div>
    <div className={styles.infoCard}>
      <img src={mailIcon} alt="Mail Icon" className={styles.icon} />
      <div className={styles.infoContent}>
        <h3>Email</h3>
        <p>info@moroccoatlas.com</p>
      </div>
    </div>
  </div>
);

export default ContactInfo;
