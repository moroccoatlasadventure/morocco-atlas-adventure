import SEO from "../../../components/common/SEO/SEO";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import JourneySection from "../components/JourneySection";
import TrekDetails from "../components/TrekDetails";
import InfoCardsSection from "../components/InfoCardsSection";
import Gallery from "../../../components/common/Gallery/Gallery";
import HeroCTA from "../../tours/components/TourDetailPage/HeroCTA";
import Timeline from "../components/Timeline";
import { trikkingtripsData } from "../data/trikkingtripsData";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

const TourPage = () => {
  useScrollToTop();
  const { t } = useTranslation();
  const { trikking } = useParams();
  const tripData = trikkingtripsData.find(
    (trip) => trip.id === trikking.toLowerCase()
  );

  if (!tripData) return <p>{t('trikkingTrips.notFound', 'Tour not found.')}</p>;

  const baseKey = `trekkingPrograms.${tripData.id}`;

  const translatedHero = {
    title: t(`${baseKey}.hero.title`, tripData.hero.title),
    subtitle: t(`${baseKey}.hero.subtitle`, tripData.hero.subtitle),
    heroImg: tripData.hero.heroImg,
    stats: (tripData.hero.stats || []).map((s, idx) => ({
      icon: s.icon,
      label: t(`trekkingPrograms.common.labels.${s.label}`, s.label),
      value: t(`${baseKey}.hero.stats.${idx}.value`, s.value)
    }))
  };

  const translatedJourney = {
    title: t(`${baseKey}.journey.title`, tripData.journey.title),
    description1: t(`${baseKey}.journey.description1`, tripData.journey.description1),
    description2: t(`${baseKey}.journey.description2`, tripData.journey.description2),
    image: tripData.journey.image,
    elevation: t(`${baseKey}.journey.elevation`, tripData.journey.elevation),
    elevationLabel: t(`${baseKey}.journey.elevationLabel`, tripData.journey.elevationLabel)
  };

  const translatedTimeline = (tripData.timeLine || []).map((step, idx) => ({
    title: t(`${baseKey}.timeline.${idx}.title`, step.title),
    description: t(`${baseKey}.timeline.${idx}.description`, step.description || ""),
    walkingTime: t(`${baseKey}.timeline.${idx}.walkingTime`, step.walkingTime || ""),
    meals: t(`${baseKey}.timeline.${idx}.meals`, step.meals || ""),
    time: t(`${baseKey}.timeline.${idx}.time`, step.time || "")
  }));

  // Translate trek details (labels and values)
  const translatedTrekDetails = (tripData.trekDetails || []).map((item, idx) => ({
    icon: item.icon,
    label: t(`${baseKey}.trekDetails.${idx}.label`, item.label),
    value: t(`${baseKey}.trekDetails.${idx}.value`, item.value)
  }));

  const translatedInfoCards = [
    {
      icon: "FaStar",
      title: t(`${baseKey}.info.notIncludedTitle`, tripData.infoCards?.[0]?.title || "Not Included"),
      included: false,
      items: t(`${baseKey}.info.notIncludedItems`, { returnObjects: true, defaultValue: tripData.infoCards?.[0]?.items || [] })
    },
    {
      icon: "FaGift",
      title: t(`${baseKey}.info.includedTitle`, tripData.infoCards?.[1]?.title || "Included"),
      included: true,
      items: t(`${baseKey}.info.includedItems`, { returnObjects: true, defaultValue: tripData.infoCards?.[1]?.items || [] })
    }
  ];

  return (
    <>
      <SEO
        title={translatedHero.title}
        description={translatedJourney.description1}
        image={translatedHero.heroImg}
        url={`https://www.moroccoatlasadventure.com/trekking/${tripData.id}`}
        keywords={[
          `${tripData.hero.title} trek`,
          `${tripData.hero.subtitle}`,
          "Morocco trekking",
          "Atlas Mountains hiking",
          `${tripData.hero.stats?.find(s =>
            s.label.toLowerCase().includes("location")
          )?.value || ""} trek`,
          `${tripData.journey.title}`,
          "Berber villages",
          "Adventure tour Morocco",
          "Toubkal National Park",
          "High Atlas trails",
          `${tripData.journey.elevation} altitude`,
        ]}
      />
      <div>
        <Hero data={translatedHero} />
        <JourneySection data={translatedJourney} />
        <Timeline 
          steps={translatedTimeline} 
        />
        <TrekDetails data={translatedTrekDetails} />
        <InfoCardsSection datas={translatedInfoCards} />
        <Gallery galleryBasePath={tripData.gallery} imageCount={3} ext={"jpg"}/>
        <HeroCTA />
      </div>
    </>
  );
};

export default TourPage;
