// toursDetailData.js
const toursDetailData = [
  {
    id: "marrakech",
    titleKey: "tourDetails.marrakech.title",
    highlightedKey: "tourDetails.marrakech.highlightedText",
    descriptionKey: "tourDetails.marrakech.description",
    heroImage: "/images/tours/Marrakech/marrakech-hero.jpg",
    whyStart: {
      features: [
        { icon: "mountain", titleKey: "tourDetails.marrakech.whyStart.features.0.title", descKey: "tourDetails.marrakech.whyStart.features.0.description" },
        { icon: "landmark", titleKey: "tourDetails.marrakech.whyStart.features.1.title", descKey: "tourDetails.marrakech.whyStart.features.1.description" },
        { icon: "utensils", titleKey: "tourDetails.marrakech.whyStart.features.2.title", descKey: "tourDetails.marrakech.whyStart.features.2.description" }
      ],
      badgeKey: "tourDetails.marrakech.whyStart.badge",
      descriptionKey: "tourDetails.marrakech.whyStart.description",
      whyStartImg: "/images/tours/Marrakech/marrakech-whystart.jpg",
    },
    tours: [
      { image: "/images/tours/Marrakech/image-2.jpg", titleKey: "tourDetails.marrakech.tours.0.title", days: "2 DAYS", id: "marrakech-zagora-2days" },
      { image: "/images/tours/Marrakech/image-4.jpg", titleKey: "tourDetails.marrakech.tours.1.title", days: "3 DAYS", id: "marrakech-merzouga-3days" },
      { image: "/images/tours/Marrakech/image-3.jpg", titleKey: "tourDetails.marrakech.tours.2.title", days: "8 DAYS", id: "marrakech-merzouga-8days" },
      { image: "/images/tours/Marrakech/image-1.png", titleKey: "tourDetails.marrakech.tours.3.title", days: "11 DAYS", id: "marrakech-casablanca-11days" },
    ]
  },
  {
    id: "fez",
    titleKey: "tourDetails.fez.title",
    highlightedKey: "tourDetails.fez.highlightedText",
    descriptionKey: "tourDetails.fez.description",
    heroImage: "/images/tours/Fez/fez-hero.jpg",
    whyStart: {
      features: [
        { icon: "landmark", titleKey: "tourDetails.fez.whyStart.features.0.title", descKey: "tourDetails.fez.whyStart.features.0.description" },
        { icon: "mountain", titleKey: "tourDetails.fez.whyStart.features.1.title", descKey: "tourDetails.fez.whyStart.features.1.description" },
        { icon: "utensils", titleKey: "tourDetails.fez.whyStart.features.2.title", descKey: "tourDetails.fez.whyStart.features.2.description" }
      ],
      badgeKey: "tourDetails.fez.whyStart.badge",
      descriptionKey: "tourDetails.fez.whyStart.description",
      whyStartImg: "/images/tours/Fez/fez-hero.jpg",
    },
    tours: [
      { image: "/images/tours/Fez/image-3.jpg", titleKey: "tourDetails.fez.tours.0.title", days: "2 DAYS", id: "fes-marrakech-2days" },
      { image: "/images/tours/Fez/image-2.jpg", titleKey: "tourDetails.fez.tours.1.title", days: "3 DAYS", id: "fes-casablanca-3days" },
      { image: "/images/tours/Fez/image-1.png", titleKey: "tourDetails.fez.tours.2.title", days: "7 DAYS", id: "fes-marrakech-7days" },
      { image: "/images/tours/Fez/image-4.jpg", titleKey: "tourDetails.fez.tours.3.title", days: "9 DAYS", id: "fes-marrakech-9days" },
    ]
  },
  {
    id: "tangier",
    titleKey: "tourDetails.tangier.title",
    highlightedKey: "tourDetails.tangier.highlightedText",
    descriptionKey: "tourDetails.tangier.description",
    heroImage: "/images/tours/Tangier/tangier-hero.jpg",
    whyStart: {
      features: [
        { icon: "landmark", titleKey: "tourDetails.tangier.whyStart.features.0.title", descKey: "tourDetails.tangier.whyStart.features.0.description" },
        { icon: "mountain", titleKey: "tourDetails.tangier.whyStart.features.1.title", descKey: "tourDetails.tangier.whyStart.features.1.description" },
        { icon: "utensils", titleKey: "tourDetails.tangier.whyStart.features.2.title", descKey: "tourDetails.tangier.whyStart.features.2.description" }
      ],
      badgeKey: "tourDetails.tangier.whyStart.badge",
      descriptionKey: "tourDetails.tangier.whyStart.description",
      whyStartImg: "/images/tours/Tangier/tangier-whystart.jpg",
    },
    tours: [
      { image: "/images/tours/Tangier/image-2.jpg", titleKey: "tourDetails.tangier.tours.0.title", days: "4 DAYS", id: "tangier-marrakech-4days" },
      { image: "/images/tours/Tangier/image-1.jpg", titleKey: "tourDetails.tangier.tours.1.title", days: "8 DAYS", id: "tangier-marrakech-8days" },
      { image: "/images/tours/Tangier/image-3.jpg", titleKey: "tourDetails.tangier.tours.2.title", days: "12 DAYS", id: "tangier-marrakech-12days" },
    ]
  },
  {
    id: "casablanca",
    titleKey: "tourDetails.casablanca.title",
    highlightedKey: "tourDetails.casablanca.highlightedText",
    descriptionKey: "tourDetails.casablanca.description",
    heroImage: "/images/tours/Casablanca/casablanca-hero.jpg",
    whyStart: {
      features: [
        { icon: "landmark", titleKey: "tourDetails.casablanca.whyStart.features.0.title", descKey: "tourDetails.casablanca.whyStart.features.0.description" },
        { icon: "mountain", titleKey: "tourDetails.casablanca.whyStart.features.1.title", descKey: "tourDetails.casablanca.whyStart.features.1.description" },
        { icon: "utensils", titleKey: "tourDetails.casablanca.whyStart.features.2.title", descKey: "tourDetails.casablanca.whyStart.features.2.description" }
      ],
      badgeKey: "tourDetails.casablanca.whyStart.badge",
      descriptionKey: "tourDetails.casablanca.whyStart.description",
      whyStartImg: "/images/tours/Casablanca/casablanca-whystart.jpg",
    },
    tours: [
      { image: "/images/tours/Casablanca/image-1.jpg", titleKey: "tourDetails.casablanca.tours.0.title", days: "3 DAYS", id: "casablanca-fes-3days" },
      { image: "/images/tours/Casablanca/image-2.jpg", titleKey: "tourDetails.casablanca.tours.1.title", days: "7 DAYS", id: "casablanca-marrakech-7days" },
      { image: "/images/tours/Casablanca/image-3.jpg", titleKey: "tourDetails.casablanca.tours.2.title", days: "15 DAYS", id: "casablanca-marrakech-15days" },
    ]
  }
];

export default toursDetailData;
