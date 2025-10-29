import styles from "./Gallery.module.css"

const Gallery = ({ galleryBasePath, imageCount = 3, ext="jpg" }) => {
  // Création dynamique du tableau d'URLs
  const images = Array.from({ length: imageCount }, (_, i) => `${galleryBasePath}${i}.${ext}`);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionTitle}>Gallery</h2>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Trek image ${index + 1}`}
            className={styles.galleryImage}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;