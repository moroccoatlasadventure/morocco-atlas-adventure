import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./BookingForm.module.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const BookingForm = () => {
  const { t } = useTranslation();

  // États du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      "h-captcha-response": token,
      firstName,
      lastName,
      email,
      message,
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
    <div className={styles.container}>
      <h2 className={styles.title}>{t("contact.form.title")}</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="firstName"
            placeholder={t("contact.form.firstNameLabel")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="lastName"
            placeholder={t("contact.form.lastNameLabel")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.emailLabel")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder={t("contact.form.messageLabel")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            rows="4"
            required
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
          disabled={isSubmitting || !isFormValid || !token}
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

      <div className={styles.tripAdvisor}>
        <div className={styles.tripAdvisorContent}>
          <img
            src="/images/trip_advisor.png"
            alt="Trip Advisor Logo"
            className={styles.tripAdvisorImage}
          />
          <div className={styles.tripAdvisorText}>
            <strong>Find us on Trip Advisor</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
