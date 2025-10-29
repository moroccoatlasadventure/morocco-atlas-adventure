import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./GalleryPreview.module.css";

const GalleryPreview = () => {
  const { t } = useTranslation();

  const handleImageError = (e) => {
    e.target.style.backgroundImage = "url('/images/placeholder.jpg')";
  };

  const galleryImages = [
    {
      id: "desert-night",
      image: "/images/gallery/desert-night.jpg",
      alt: "Desert night sky"
    },
    {
      id: "camel-sunset",
      image: "/images/gallery/camel-sunset.jpg",
      alt: "Camel at sunset"
    },
    {
      id: "architecture",
      image: "/images/gallery/architecture.jpg",
      alt: "Moroccan architecture"
    },
    {
      id: "market",
      image: "/images/gallery/market.jpg",
      alt: "Moroccan market"
    }
  ];

  return (
    <section className={styles.galleryPreview}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t("gallery.title")}</h2>
          <p className={styles.sectionSubtitle}>{t("gallery.subtitle")}</p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryImages.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <div
                className={styles.galleryImage}
                style={{ backgroundImage: `url(${item.image})` }}
                onError={handleImageError}
                aria-label={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;