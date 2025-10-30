import SEO from "../../../components/common/SEO/SEO";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import IndividualTourHero from "../components/IndividualTourDetail/IndividualTourHero";
import TourContent from "../components/IndividualTourDetail/TourContent";
import BookingForm from "../components/IndividualTourDetail/BookingForm";
import individualToursData from "../data/individualToursData";
import styles from "./IndividualTourDetailPage.module.css";

const IndividualTourDetailPage = () => {
  useScrollToTop();
  const { tourId } = useParams();
  const { t } = useTranslation();
  
  const tour = individualToursData.find(t => t.id === tourId);
  
  if (!tour) {
    return (
      <div className={styles.notFound}>
        <h1>{t("individualTours.common.tourNotFound")}</h1>
        <p>{t("individualTours.common.tourNotFoundDescription")}</p>
      </div>
    );
  }

  // Create a tour object with translated content
  const translatedTour = {
    ...tour,
    title: t(tour.titleKey),
    subtitle: t(tour.subtitleKey),
    duration: t(tour.durationKey),
    startFrom: t(tour.startFromKey),
    availability: t(tour.availabilityKey),
    overview: t(tour.overviewKey),
    highlights: tour.highlightsKey ? t(tour.highlightsKey, { returnObjects: true }) : null,
    includes: t(tour.includesKey, { returnObjects: true }),
    notIncluded: t(tour.notIncludedKey, { returnObjects: true }),
    itinerary: t(tour.itineraryKey, { returnObjects: true }),
};

  console.log("Translated Tour Object:", translatedTour); // Add this line

  return (
    <>
      <SEO
        title={`${translatedTour.title} - Morocco Tours`}
        description={translatedTour.overview.substring(0, 160) + '...'}
        image={translatedTour.heroImage}
        url={`https://www.moroccoatlasadventure.com/tour-detail/${tourId}`}
        keywords={[
          translatedTour.title,
          translatedTour.subtitle,
          "Morocco tours",
          `${translatedTour.startFrom} tour`,
          `${translatedTour.duration} tour`
        ]}
      />
      <div className={styles.page}>
        <IndividualTourHero tour={translatedTour} />
        
        <div className={styles.contentContainer}>
          <div className={styles.layout}>
            <div className={styles.mainColumn}>
              <TourContent tour={translatedTour} />
            </div>
            
            <div className={styles.sidebarColumn}>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualTourDetailPage;
