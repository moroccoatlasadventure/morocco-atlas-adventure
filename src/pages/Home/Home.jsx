import SEO from "../../components/common/SEO/SEO";
import Hero from "../../features/home/components/Hero/Hero";
import AboutPreview from "../../features/home/components/AboutPreview/AboutPreview";
import ToursSection from "../../features/home/components/ToursSection/ToursSection";
import { topDestinationData } from '../../features/home/components/ToursSection/data/topDestinationData';
import TrekkingTripsPreview from "../../features/home/components/TrekkingTrips/TrekkingTripsPreview";
import ActivitiesPreview from "../../features/home/components/ActivitiesPreview/ActivitiesPreview";
import GalleryPreview from "../../features/home/components/GalleryPreview/GalleryPreview";
import ContactForm from "../../features/contact/components/ContactForm/ContactForm";
import InteractiveMap from "../../features/contact/components/InteractiveMap/InteractiveMap";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Home = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Home - Morocco Atlas Adventure"
        description="Explore Morocco with Morocco Atlas Adventure: unforgettable treks in the Atlas and Rif Mountains, guided excursions through imperial cities, thrilling desert adventures in the Sahara, and authentic cultural experiences. Book multi-day trekking programs, guided tours, and adventure activities from Marrakech, Tangier, Fes, and Casablanca with expert local guides."
        image="/images/hero/hero-bg.jpg"
        url="https://www.moroccoatlasadventure.com/"
        keywords={[
          "Morocco",
          "Trekking Morocco",
          "Atlas Mountains trekking",
          "Rif Mountains trekking",
          "Sahara Desert tours",
          "Sahara Trek",
          "Morocco adventure trips",
          "Adventure",
          "Cultural Experiences",
          "Guided trekking Morocco",
          "Local Guides",
          "Multi-day Morocco trekking",
          "Tours from Marrakech",
          "Tours from Tangier",
          "Tours from Fes",
          "Tours from Casablanca",
          "Atlas Mountains Trek",
          "Rif Mountains Trek"
        ]}
        author="Morocco Atlas Adventure"
      />
    <div className="homePage">
      <Hero />
      <div className="section aboutPreview">
        <AboutPreview />
      </div>
      <div className="toursSection">
        <ToursSection data={topDestinationData} />
      </div>
      <div className="section trekkingTripsPreview">
        <TrekkingTripsPreview />
      </div>
      <div className="section activitiesPreview">
        <ActivitiesPreview />
      </div>
      <div className="section">
        <GalleryPreview />
      </div>
      <div className="section contactSection">
        <ContactForm />
      </div>
    </div>
  </>
  );
};

export default Home;
