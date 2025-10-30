import SEO from '../../components/common/SEO/SEO';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';
import ContactForm from '../../features/contact/components/ContactForm/ContactForm';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const Contact = () => {
  const { t } = useTranslation();
  useScrollToTop();

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Morocco Atlas Adventure to book trekking trips, ask questions, or plan your adventure in the Atlas Mountains, Rif Mountains, and Sahara Desert. Reach us from Marrakech, Tangier, Fes, or Casablanca."
        image="/images/logo.png"
        url="https://www.moroccoatlasadventure.com/contact"
        author="Morocco Atlas Adventure"
        keywords={[
          "Contact Morocco Atlas Adventure",
          "Trekking Morocco contact",
          "Atlas Mountains tours contact",
          "Rif Mountains trekking contact",
          "Sahara Desert tours contact",
          "Book trekking Morocco",
          "Adventure trips Morocco",
          "Morocco tour inquiry"
        ]}
      />
      <div className={styles.contactPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <i className="fas fa-paper-plane"></i>
              {t('contact.hero.badge')}
            </span>
            <h1 className={styles.heroTitle}>{t('contact.hero.title')}</h1>
            <p className={styles.heroSubtitle}>
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Contact Form Section - Uses your existing ContactForm component */}
        <ContactForm />

        {/* Additional Contact Methods (Optional) */}
        <section className={styles.quickContactSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t('contact.quick.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('contact.quick.subtitle')}</p>
            
            <div className={styles.quickContactGrid}>
              <div className={styles.quickContactCard}>
                <div className={styles.quickIcon}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3>{t('contact.quick.whatsapp')}</h3>
                <p>{t('contact.quick.whatsappDesc')}</p>
                <a 
                  href="https://wa.me/+212611917449" 
                  className={styles.quickLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.quick.chatNow')}
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              <div className={styles.quickContactCard}>
                <div className={styles.quickIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>{t('contact.quick.email')}</h3>
                <p>{t('contact.quick.emailDesc')}</p>
                <a 
                  href="mailto:Moroccoatlasadventure@gmail.com" 
                  className={styles.quickLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.quick.sendEmail')}
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              <div className={styles.quickContactCard}>
                <div className={styles.quickIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                <h3>{t('contact.quick.phone')}</h3>
                <p>{t('contact.quick.phoneDesc')}</p>
                <a 
                  href="tel:+212611917449" 
                  className={styles.quickLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.quick.callNow')}
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={styles.socialSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{t('contact.social.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('contact.social.subtitle')}</p>
            
            <div className={styles.socialGrid}>
              <a href="https://facebook.com" className={styles.socialCard} aria-label="Facebook">
                <div className={styles.socialIconWrapper}>
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className={styles.socialContent}>
                  <h3>Facebook</h3>
                  <p>{t('contact.social.facebookFollowers')}</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/morocco_atlas_adventure?igsh=MXVmMTY2NGhidG9oNg%3D%3D&utm_source=qr"
                className={styles.socialCard}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.socialIconWrapper}>
                  <i className="fab fa-instagram"></i>
                </div>
                <div className={styles.socialContent}>
                  <h3>Instagram</h3>
                  <p>{t('contact.social.instagramFollowers')}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
