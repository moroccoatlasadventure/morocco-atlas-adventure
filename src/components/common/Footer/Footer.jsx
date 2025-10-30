import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoCircle}>
                <img src="/images/logo.png" alt="Morocco Atlas Adventure Logo" className={styles.logoIcon} />
              </div>
              <span className={styles.brandName}>Morocco Atlas Adventure</span>
            </Link>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>

          <div className={styles.socialSection}>
            <a href="https://facebook.com" aria-label="Facebook" className={styles.socialLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/morocco_atlas_adventure?igsh=MXVmMTY2NGhidG9oNg%3D%3D&utm_source=qr"
              aria-label="Instagram"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} Morocco Atlas Adventure. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
