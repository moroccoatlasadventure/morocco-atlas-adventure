import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', flag: '/images/etats-unis.png', name: 'English' },
    { code: 'es', flag: '/images/espagne.png', name: 'Español' },
    { code: 'it', flag: '/images/italie.png', name: 'Italiano' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSelector}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`${styles.langButton} ${
            i18n.language === lang.code ? styles.active : ''
          }`}
          aria-label={`Switch to ${lang.name}`}
        >
          <img src={lang.flag} alt={`${lang.name} flag`} className={styles.flag} />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
