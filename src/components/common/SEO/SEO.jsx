// src/components/common/SEO/SEO.jsx
import { Helmet } from "react-helmet-async";
import defaults from "../../../utils/seoDefaults";

const SEO = ({
  title,
  description,
  image,
  url,
  author,
  keywords,
  noIndex = false,
  children
}) => {
  const metaTitle = title ? `${title} | ${defaults.siteName}` : defaults.title;
  const metaDescription = description || defaults.description;
  const metaImage = image || defaults.image;
  const metaUrl = url || defaults.siteUrl;
  const metaAuthor = author || defaults.author;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content={metaAuthor} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Canonical */}
      <link rel="canonical" href={metaUrl} />

      {children}
    </Helmet>
  );
};

export default SEO;
