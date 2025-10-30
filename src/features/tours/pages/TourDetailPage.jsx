import SEO from "../../../components/common/SEO/SEO";
import { useParams } from "react-router-dom";
import HeroSection from "../components/TourDetailPage/HeroSection";
import WhyStartSection from "../components/TourDetailPage/WhyStartSection";
import toursDetailData from "./data/toursDetailData";
import ToursSection from "../../home/components/ToursSection/ToursSection";
import HeroCTA from "../components/TourDetailPage/HeroCTA";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import toursSEOData from "./data/toursSEOData";

const TourDetailPage = () => {
  useScrollToTop();
  const { city } = useParams();
  const tourData = toursDetailData.find(
    (tour) => tour.id === city.toLowerCase()
  );
  if (!tourData) return <p>Tour not found.</p>;
  const currentSEO = toursSEOData[city.toLowerCase()] || toursSEOData.marrakech;
  return (
    <>
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        image={tourData.heroImage}
        url={`https://www.moroccoatlasadventure.com/tour/${city}`}
        keywords={currentSEO.keywords}
      />
      <div>
        <HeroSection
          heroImage={tourData.heroImage}
          titleKey={tourData.titleKey}
          highlightedKey={tourData.highlightedKey}
          descriptionKey={tourData.descriptionKey}
        />
        <WhyStartSection
          image={tourData.whyStart.whyStartImg}
          features={tourData.whyStart.features}
          badgeKey={tourData.whyStart.badgeKey}
          highlightedKey={tourData.highlightedKey}
          descriptionKey={tourData.whyStart.descriptionKey}
        />
        <ToursSection data={tourData.tours} />
        <HeroCTA />
      </div>
    </>
  );
}

export default TourDetailPage;
