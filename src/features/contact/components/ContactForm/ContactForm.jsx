import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactForm = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  // Nouveaux états pour le formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      "h-captcha-response": token,
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        // Reset des champs
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setToken("");
      } else {
        setError(t("contact.form.error"));
      }
    } catch (err) {
      setError(t("contact.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Vérifie si tous les champs sont remplis
  const isFormValid = firstName && lastName && email && message;

  if (isSuccess) {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>{t("contact.form.success")}</h3>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <i className="fas fa-envelope"></i>
            {t("contact.badge")}
          </span>
          <h2 className={styles.title}>{t("contact.form.title")}</h2>
          <p className={styles.subtitle}>{t("contact.form.subtitle")}</p>
        </div>

        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">{t("contact.form.firstNameLabel")}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={t("contact.form.firstName")}
                  required
                  className={styles.input}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">{t("contact.form.lastNameLabel")}</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={t("contact.form.lastName")}
                  required
                  className={styles.input}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t("contact.form.emailLabel")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.form.email")}
                required
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t("contact.form.messageLabel")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.form.message")}
                required
                rows="6"
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
              reCaptchaCompat={false}
              onVerify={(token) => setToken(token)}
            />

            {error && <p className={styles.error}>{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={styles.submitButton}
            >
              <span>
                {isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.submit")}
              </span>
              {!isSubmitting && <i className="fas fa-arrow-right"></i>}
              {isSubmitting && <i className="fas fa-spinner fa-spin"></i>}
            </button>
          </form>

          {/* Contact Info Sidebar */}
          <div className={styles.contactInfo}>
            <h3>{t("contact.info.title")}</h3>
            <p>{t("contact.info.description")}</p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{t("contact.info.email")}</span>
                  <a href="mailto:Moroccoatlasadventure@gmail.com">
                    Moroccoatlasadventure@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{t("contact.info.phone")}</span>
                  <a href="tel:+212611917449">+212 611-917449</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{t("contact.info.location")}</span>
                  <span>LOT DE LA PROVINCE ERRACHIDIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
