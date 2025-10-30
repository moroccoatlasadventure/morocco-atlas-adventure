// trikkingtripsData.js
export const trikkingtripsData = [
  {
    id: "oukaimden-imlil",
    hero: {
        title: "2 Days Trek in Oukaimden To Imlil Valley",
        subtitle: "A breathtaking journey through valleys, villages, and mountain trails",
        heroImg: "/images/trekkingTrips/atlas-mountains/oukaimden/heroImg.jpg",
        stats: [
            { icon: "FaClock", label: "Duration", value: "2 Days"},
            { icon: "FaMountain", label: "difficulty", value: "Moderate"},
            { icon: "FaMapMarkerAlt", label: "location", value: "Atlas Mountains"},
            { icon: "FaSun", label: "bestSeason", value: "Apr-Oct"}
        ],
    },
    journey: {
        title: "An Unforgettable Trek from Oukaimden to Imlil Valley",
        description1: "Embark on a two-day trek from Oukaimden to Imlil Valley and discover the heart of Morocco’s High Atlas Mountains. Walk through breathtaking landscapes, traditional Berber villages, and scenic mountain passes, while experiencing authentic Moroccan mountain life far from the city bustle.",
        description2: "This gentle adventure combines nature, culture, and discovery. From the snowy peaks of Oukaimden to the lush valleys of Imlil, enjoy panoramic views, local hospitality, and delicious homemade meals — a true Berber experience in just two unforgettable days.",
        image: "/images/trekkingTrips/atlas-mountains/oukaimden/journeyImg.jpg",
        elevation: "2,600m",
        elevationLabel: "Altitude Range",
    },
    trekDetails: [
        { icon: "FaShoePrints", label: "Boots", value: "Boots" },
        { icon: "FaUmbrella", label: "Rain", value: "Rain Jacket" },
        { icon: "FaBed", label: "Bag", value: "Warm Bag" },
        { icon: "FaWater", label: "Water", value: "Water Bottle" },
        { icon: "FaSuitcase", label: "Pack", value: "Soft Bag" },
        { icon: "FaSun", label: "Sun", value: "Sunglasses" }
    ],
    timeLine : [
      {
        title: "Day 1 — Marrakech → Oukaimeden → Tacheddirt (2300m)",
        description:
          "Meet your mountain guide, drive to Oukaimeden and start hiking up to Tizi N'Addi. Meet Berber families on the way, enjoy incredible views before descending to Tacheddirt village. Overnight in local guesthouse.",
        walkingTime: "05h walking",
        meals: "L, D",
      },
      {
        title: "Day 2 — Tacheddirt → Tizi N'Tamatert (2280m) → Imlil (1740m)",
        description:
          "Breakfast then descent through Berber villages. Enjoy mint tea with locals before climbing to Tizi N'Tamatert pass. Lunch with views over Toubkal mountains. End the trek in Imlil and return to Marrakech.",
        walkingTime: "05h30 walking approx.",
        meals: "B, L, D",
      },
    ],
    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Travel insurance",
          "Soft drinks",
          "Tips",
          "Personal Expenses"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "Transfers between Marrakech and the trek’s start and end points",
          "1 Night in homestay during the hike.",
          "All meals during the hike.",
          "The services of muleteers, and their mules.",
          "The services of a cook",
          "My services as a certified mountain guide"
        ]
      },
    ],
    gallery: "/images/trekkingTrips/atlas-mountains/oukaimden/image"
  },
  {
    id: "berber-villages",
    hero: {
      title: "3 Days Trek in Berber Villages",
      subtitle: "Discover the culture and landscapes of the Atlas Mountains",
      heroImg: "/images/trekkingTrips/atlas-mountains/berber-villages/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "3 Days" },
        { icon: "FaMountain", label: "Difficulty", value: "Moderate" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "High Atlas Mountains" },
        { icon: "FaSun", label: "Best Season", value: "Apr–Oct" }
      ],
    },

    journey: {
      title: "Explore the Heart of Berber Culture in the Atlas Mountains",
      description1:
        "Discover the magnificent Atlas Mountains, enjoy the beauty of the valleys, and explore authentic Berber villages. Walk through natural landscapes while experiencing the lifestyle and traditions of the local communities.",
      description2:
        "This trek offers unforgettable human encounters, traditional food, peaceful mountain trails, and breathtaking views — a truly immersive cultural experience in just 3 days.",
      image: "/images/trekkingTrips/atlas-mountains/berber-villages/journeyImg.jpg",
      elevation: "2,930m",
      elevationLabel: "Maximum Altitude",
    },

    trekDetails: [
      { icon: "FaShoePrints", label: "Boots", value: "Hiking boots" },
      { icon: "FaMedkit", label: "Aid", value: "First kit" },
      { icon: "FaBed", label: "Bag", value: "Sleep bag" },
      { icon: "FaWater", label: "Water", value: "Water bottle" },
      { icon: "FaUmbrella", label: "Rain", value: "Rain gear" },
      { icon: "FaSun", label: "Sun", value: "Sun protect" }
    ],

    timeLine: [
      {
        title: "Day 1 — Marrakech → Tizi Ouddid (2000m) → Tizi Oussem (1800m) → Azib Tamsoult Refuge (2250m)",
        description:
          "Pick up from Marrakech and drive to Aguersoual. Meet the local team and start hiking to Tizi Ouddid pass with superb views over Azzaden and Imlil valleys. Continue through Id Aissa village before reaching Tizi Oussem. Overnight in a peaceful guest house.",
        walkingTime: "5h walking",
        meals: "L, D",
      },
      {
        title: "Day 2 — Azib Tamsoult (2250m) → Tizi n’Tzikert Pass (2930m) → Aremd Village (1900m)",
        description:
          "Walk uphill through forest toward Tizi n’Tzikert Pass with views over the colorful mountains and Mount Toubkal. Descend toward Aremd Village. Overnight in a lodge with traditional hospitality.",
        walkingTime: "6h walking approx.",
        meals: "B, L, D",
      },
      {
        title: "Day 3 — Aremd Village (1900m) → Imlil (1740m) → Marrakech",
        description:
          "Breakfast then walk down to Imlil where your driver meets you for the transfer back to Marrakech. A wonderful experience full of memories from the High Atlas!",
        walkingTime: "1h30 walking approx.",
        meals: "B, L",
      },
    ],
    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Travel insurance",
          "Soft drinks",
          "Tips",
          "Personal expenses"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "Transfers Marrakech ↔ Trek start/end point",
          "2 Nights in homestay during the hike",
          "All meals during the trek",
          "Services of muleteers and their mules",
          "The services of a cook",
          "Certified mountain guide"
        ]
      }
    ],
    gallery: "/images/trekkingTrips/atlas-mountains/berber-villages/image"
  },
  {
    id: "toubkal",
    hero: {
      title: "7 Days Trek in Toubkal",
      subtitle: "Explore the Atlas Mountains and Berber Villages",
      heroImg: "/images/trekkingTrips/atlas-mountains/toubkal/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "7 Days" },
        { icon: "FaMountain", label: "Difficulty", value: "Challenging" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "High Atlas Mountains" },
        { icon: "FaSun", label: "Best Season", value: "Mar–Nov" }
      ],
    },

    journey: {
      title: "Discover the High Atlas and Berber Traditions",
      description1:
        "Embark on a 7-day trek through the High Atlas Mountains, exploring beautiful valleys, Berber villages, and traditional culture. Each day offers a mix of challenging hikes and opportunities to immerse in local life.",
      description2:
        "Experience stunning panoramas, mountain trails, and unforgettable moments from the summit of Jebel Toubkal to peaceful riversides. Relax in village cafés and enjoy mint tea after your daily adventures.",
      image: "/images/trekkingTrips/atlas-mountains/toubkal/journeyImg.jpg",
      elevation: "4167m",
      elevationLabel: "Maximum Altitude",
    },

    trekDetails: [
      { icon: "FaShoePrints", label: "Footwear", value: "Good walking boots" },
      { icon: "FaMedkit", label: "First Aid", value: "Personal first aid kit" },
      { icon: "FaBed", label: "Bag", value: "3–4 season / Light" },
      { icon: "FaUmbrella", label: "Rain", value: "Light rain gear" },
      { icon: "FaWater", label: "Water", value: "Water bottle or hydration pack" },
      { icon: "FaSun", label: "Sun", value: "Sunglasses & sunscreen" },
    ],

    timeLine: [
      {
        title: "Day 1 — Marrakech → Tassa Ouirgane → Tiziane (1800m)",
        description:
          "Drive to Tassa Ouirgane and start trekking toward Tiziane. Walk through juniper and cedar forests and along the red-soil valley of Azzadene. Enjoy scenic mountain views and small remote villages.",
        walkingTime: "3-4h walking",
        meals: "L, D",
      },
      {
        title: "Day 2 — Tiziane → Tizi 'n Touati → Tizgui (2300m)",
        description:
          "Climb out of Azzadene valley to Tizi 'n Touati pass for magnificent views of the High Atlas. Descend through oak forests and villages. Overnight camp near Tizgui at Azib Assoul.",
        walkingTime: "5-6h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 3 — Tizgui → Tizi Oussem (1900m)",
        description:
          "Cross Tizi 'n Tagoudalte pass (2700m) and descend through alpine meadows and riverside terraces to the village of Tizi Oussem. Afternoon free to relax or explore the village. Overnight in a gîte.",
        walkingTime: "5-6h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 4 — Tizi Oussem → Aremd (1900m)",
        description:
          "Hike to Azib Tamsoulte waterfall, return via Tizi 'n Mzik pass (2500m), and reach the main Toubkal valley at Aremd. Overnight in a village gîte.",
        walkingTime: "5h walking approx.",
        meals: "B, L, D",
      },
      {
        title: "Day 5 — Aremd → Refuge du Toubkal (3200m)",
        description:
          "Gradually climb through Toubkal valley via Sidi Chamarouch pilgrimage site to the Toubkal refuge. Camp at the foot of Mount Toubkal.",
        walkingTime: "5-6h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 6 — Summit of Toubkal (4167m) → Refuge → Imili",
        description:
          "Early morning ascent to the summit (2-3h) for breathtaking views. Descend back to the base camp and follow the Mizane river trail to Imili. Overnight in village or lodge.",
        walkingTime: "8-9h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 7 — Return to Marrakech",
        description:
          "Breakfast then transfer from Imili back to Marrakech. End of trek with memories from the High Atlas.",
        walkingTime: "1-2h walking",
        meals: "B, L",
      },
    ],

    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Travel insurance",
          "Soft drinks and other unspecified beverages",
          "Tips",
          "Personal expenses"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "English-speaking guide and cook",
          "Muleteers and mules for luggage",
          "Full board during the trek including water, coffee, and tea",
          "Mountain refuges accommodation",
          "Transport hotel ↔ trek start/end",
          "Mess, kitchen, and sanitary tents if camping"
        ]
      }
    ],
    gallery: "/images/trekkingTrips/atlas-mountains/toubkal/image"
  },
  {
    id: "chefchaouen-akchour",
    hero: {
      title: "2 Days Trekking from Chefchaouen to Akchour",
      subtitle: "Explore the Rif Mountains and Scenic Villages",
      heroImg: "/images/trekkingTrips/rif-mountains/akchour/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "2 Days" },
        { icon: "FaMountain", label: "Difficulty", value: "Moderate" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "Rif Mountains, Morocco" },
        { icon: "FaSun", label: "Best Season", value: "Mar–Nov" }
      ],
    },

    journey: {
      title: "Discover the Rif Mountains and Local Culture",
      description1:
        "Embark on a 2-day trek through the scenic Rif Mountains, hiking from Chefchaouen to Akchour. Enjoy forests, rivers, rock formations, and traditional villages along the way.",
      description2:
        "Stay overnight at a local guesthouse, immerse yourself in Moroccan culture, and witness stunning natural landscapes from riversides to panoramic mountain viewpoints.",
      image: "/images/trekkingTrips/rif-mountains/akchour/journeyImg.jpg",
      elevation: "1260m",
      elevationLabel: "Maximum Altitude",
    },

    trekDetails: [
      { icon: "FaShoePrints", label: "Footwear", value: "Good walking boots" },
      { icon: "FaMedkit", label: "First Aid", value: "Personal first aid kit" },
      { icon: "FaBed", label: "Bag", value: "Light backpack / Overnight gear" },
      { icon: "FaUmbrella", label: "Rain", value: "Light rain gear" },
      { icon: "FaWater", label: "Water", value: "Water bottle or hydration pack" },
      { icon: "FaSun", label: "Sun", value: "Sunglasses & sunscreen" },
    ],

    timeLine: [
      {
        title: "Day 1 — Chefchaouen → Tissouka → Afeska",
        description:
          "Pick up from your hotel in Chefchaouen and start walking through Chefchaouen Medina, Place Outa el Hammam, Chefchaouen Cemetery, Kasbah Museum, and Grand Mosque. Reach Ras El Ma (Km 0) and continue through Bouzafer Mosque and Talassemtane National Park. Arrive in Azilane and stay overnight at Afeska rural house.",
        walkingTime: "6-7h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 2 — Afeska → God's Bridge → Akchour",
        description:
          "Start the day visiting the Cascades of Alchour and explore God's Bridge Canyon with several scenic stops. Continue to the village of Alchour for lunch or mint tea by the river. Return to Chefchaouen via Route d’Alchour.",
        walkingTime: "5-6h walking",
        meals: "B, L",
      },
    ],

    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Travel insurance",
          "Soft drinks and other unspecified beverages",
          "Tips",
          "Personal expenses"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "English-speaking mountain guide",
          "Breakfast, picnic lunch, and dinner",
          "Overnight accommodation at Afeska rural house",
          "All transfers and pick-up from Chefchaouen hotel",
          "Immersive local cultural experience"
        ]
      }
    ],
    gallery: "/images/trekkingTrips/rif-mountains/akchour/image"
  },
  {
    id: "from-chefchaouen",
    hero: {
      title: "3 Days Trekking from Chefchaouen",
      subtitle: "Explore the Rif Mountains, Waterfalls, and Villages",
      heroImg: "/images/trekkingTrips/rif-mountains/chefchaouen/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "3 Days" },
        { icon: "FaMountain", label: "Difficulty", value: "Moderate" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "Rif Mountains, Morocco" },
        { icon: "FaSun", label: "Best Season", value: "Mar–Nov" }
      ],
    },

    journey: {
      title: "Discover the Rif Mountains and Local Culture",
      description1:
        "Embark on a 3-day trek through Talassemtane National Park, hiking from Chefchaouen to Akchour. Enjoy forests, rivers, waterfalls, rock formations, and traditional Berber villages along the way.",
      description2:
        "Stay overnight in local guesthouses, immerse yourself in Moroccan hospitality, and witness stunning natural landscapes including panoramic mountain viewpoints, gorges, and cascades.",
      image: "/images/trekkingTrips/rif-mountains/chefchaouen/journeyImg.jpg",
      elevation: "1260m",
      elevationLabel: "Maximum Altitude",
    },

    trekDetails: [
      { icon: "FaShoePrints", label: "Footwear", value: "Good walking boots" },
      { icon: "FaMedkit", label: "First Aid", value: "Personal first aid kit" },
      { icon: "FaBed", label: "Bag", value: "Light backpack / Overnight gear" },
      { icon: "FaUmbrella", label: "Rain", value: "Light rain gear" },
      { icon: "FaWater", label: "Water", value: "Water bottle or hydration pack" },
      { icon: "FaSun", label: "Sun", value: "Sunglasses & sunscreen" },
    ],

    timeLine: [
      {
        title: "Day 1 — Chefchaouen → Tissouka → Afeska",
        description:
          "Begin your trek from Chefchaouen, walking through forest paths with panoramic views of the Rif Mountains. Stop at Tissouka for scenic views and continue to the traditional Berber village of Afeska. Evening with a host family in a village guesthouse.",
        walkingTime: "9h walking",
        meals: "D",
      },
      {
        title: "Day 2 — Afeska → God's Bridge → Akchour",
        description:
          "Hike through valleys and pine forests to the dramatic natural rock arch known as God's Bridge. Continue to the picturesque village of Akchour beside the mountain river. Relax and explore the surrounding landscapes. Overnight in Akchour at a local guesthouse or eco-lodge.",
        walkingTime: "30min walking",
        meals: "B, D",
      },
      {
        title: "Day 3 — Akchour → Waterfalls → Chefchaouen",
        description:
          "Trek to the famous Akchour waterfalls, admire the cascades, swim in natural pools (seasonal), and take photos of the canyon scenery. After lunch, return to Chefchaouen by local taxi, completing your 3-day adventure.",
        walkingTime: "1h walking",
        meals: "B, L",
      },
    ],

    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Travel insurance",
          "Soft drinks and other unspecified beverages",
          "Tips",
          "Personal expenses"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "English-speaking trekking guide for 3 days",
          "Transfers from Chefchaouen to Akchour and back",
          "Dinner and breakfast/lunch",
          "Overnight accommodation in village guesthouses",
          "Immersive local cultural experience"
        ]
      }
    ],
    gallery: "/images/trekkingTrips/rif-mountains/chefchaouen/image"
  },
  {
    id: "merzouga-two-days",
    hero: {
      title: "2 Days Trekking in Merzouga Desert",
      subtitle: "Walk through the dunes of Erg-Chebbi and meet Berber families",
      heroImg: "/images/trekkingTrips/sahara/merzouga-two-days/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "2 Days" },
        { icon: "FaMountain", label: "Terrain", value: "Sand dunes & rocky desert" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "Merzouga, Morocco" },
        { icon: "FaSun", label: "Best Season", value: "Oct–Apr" }
      ],
    },

    journey: {
      title: "Explore Erg-Chebbi and the Nomadic Life",
      description1:
        "A 2-day desert trek from Merzouga designed for travelers who want to experience the beauty of the Sahara without spending many days in the desert. Walk through the golden dunes, enjoy the tranquility of the Sahara, and connect with Berber families.",
      description2:
        "You’ll spend a peaceful night under the stars at a traditional desert camp, savor Moroccan cuisine by candlelight, and enjoy local music. The perfect short desert escape.",
      image: "/images/trekkingTrips/sahara/merzouga-two-days/journeyImg.jpg",
      elevation: "850m",
      elevationLabel: "Average Altitude",
    },

    trekDetails: [
      { icon: "FaCampground", label: "Camping", value: "Equipment provided" },
      { icon: "FaUtensils", label: "Meals", value: "Breakfast, Lunch, Dinner" },
      { icon: "GiCamel", label: "Luggage", value: "Carried by camels" },
      { icon: "FaTint", label: "Water", value: "Included during trek" },
      { icon: "FaUserTie", label: "Guide", value: "Local expert guide" },
      { icon: "FaCaravan", label: "Camel Driver", value: "Berber desert team" },
    ],

    timeLine: [
      {
        title: "Day 1 — Merzouga → Erg-Chebbi Dunes → Desert Camp",
        description:
          "Begin the trek from Merzouga village, walking across soft dunes of Erg-Chebbi. Visit local Berber families and learn about their desert life. Enjoy a beautiful sunset over the dunes and spend the night in a nomadic-style desert camp under the stars.",
        walkingTime: "4–5h walking",
        meals: "L, D",
      },
      {
        title: "Day 2 — Desert Camp → Black Desert → Return to Merzouga",
        description:
          "Wake up early to watch the sunrise over the dunes, then hike through black volcanic stones and contrasting desert landscapes. After lunch, return to Merzouga by camel or on foot. End of the 2-day trek.",
        walkingTime: "4h walking",
        meals: "B, L",
      }
    ],

    infoCards: [
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "Camping requirements (tent, mattress, blankets)",
          "Meals: Breakfast, Lunch, Dinner",
          "Camels to carry luggage",
          "Water during the trek",
          "Expert local guide and camel driver"
        ]
      },
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Transportation to/from Merzouga",
          "Personal expenses",
          "Travel insurance",
          "Tips"
        ]
      }
    ],
    gallery: "/images/trekkingTrips/sahara/merzouga-two-days/image"
  },
  {
    id: "merzouga-three-days",
    hero: {
      title: "3 Days Trekking in the Merzouga Desert",
      subtitle: "Discover Erg-Chebbi, Black Desert, and Berber Villages",
      heroImg: "/images/trekkingTrips/sahara/merzouga-three-days/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "3 Days" },
        { icon: "FaMountain", label: "Terrain", value: "Dunes & rocky desert" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "Merzouga, Morocco" },
        { icon: "FaSun", label: "Best Season", value: "Oct–Apr" }
      ],
    },

    journey: {
      title: "Hike through Erg-Chebbi and the Black Desert",
      description1:
        "This 3-day Sahara trekking adventure is perfect for travelers who want to dive deeper into the desert experience. Walk across Erg-Chebbi’s golden dunes, visit Berber villages, and explore the contrasting landscapes of black volcanic plains.",
      description2:
        "Sleep under the stars in peaceful camps, enjoy authentic meals prepared by your local team, and connect with nomadic families along the way. A true desert immersion through Morocco’s most iconic landscapes.",
      image: "/images/trekkingTrips/sahara/merzouga-three-days/journeyImg.jpg",
      elevation: "850m",
      elevationLabel: "Average Altitude",
    },

    trekDetails: [
      { icon: "FaCampground", label: "Camping", value: "Equipment provided" },
      { icon: "FaUtensils", label: "Meals", value: "Breakfast, Lunch, Dinner" },
      { icon: "GiCamel", label: "Luggage", value: "Carried by camels" },
      { icon: "FaTint", label: "Water", value: "Included during trek" },
      { icon: "FaUserTie", label: "Guide", value: "Expert desert guide" },
      { icon: "FaCaravan", label: "Camel Driver", value: "Experienced team" },
    ],

    timeLine: [
      {
        title: "Day 1 — Merzouga → Erg-Chebbi Dunes → Desert Camp",
        description:
          "Depart from Merzouga on foot across the majestic dunes of Erg-Chebbi. Enjoy the silence of the desert, visit nomadic families, and settle in your desert camp for dinner and stargazing.",
        walkingTime: "5–6h walking",
        meals: "L, D",
      },
      {
        title: "Day 2 — Desert Camp → Black Desert → Berber Family Camp",
        description:
          "Continue your trek through the fascinating Black Desert area with volcanic stone plains. Meet Berber families, learn about their traditions, and spend the night in a new desert camp far from the villages.",
        walkingTime: "5–7h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 3 — Return via Erg-Chebbi → Merzouga",
        description:
          "After breakfast, walk back towards Merzouga through scenic dunes and desert plateaus. Capture your last desert moments before ending your 3-day trek in Merzouga village.",
        walkingTime: "4–5h walking",
        meals: "B, L",
      }
    ],

    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Transportation to/from Merzouga",
          "Personal expenses",
          "Travel insurance",
          "Tips"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "Camping requirements (tent, mattress, blankets)",
          "Meals: Breakfast, Lunch, Dinner",
          "Camels to carry luggage",
          "Water during the trek",
          "Expert local guide and camel driver"
        ]
      },
    ],
    gallery: "/images/trekkingTrips/sahara/merzouga-three-days/image" 
  },
  {
    id: "merzouga-seven-days",
    hero: {
      title: "Merzouga Desert Trekking & Hiking",
      subtitle: "Explore the Sahara and Erg-Chebbi dunes like a true Berber nomad",
      heroImg: "/images/trekkingTrips/sahara/merzouga-seven-days/heroImg.jpg",
      stats: [
        { icon: "FaClock", label: "Duration", value: "1–7 Days" },
        { icon: "FaMountain", label: "Terrain", value: "Dunes & Rocky Desert" },
        { icon: "FaMapMarkerAlt", label: "Location", value: "Merzouga, Morocco" },
        { icon: "FaSun", label: "Best Season", value: "Oct–Apr" }
      ],
    },

    journey: {
      title: "Explore the Hidden Gems of Merzouga",
      description1:
        "Our Hiking in Merzouga takes you deep into the Sahara Desert to discover the hidden beauty of Erg-Chebbi dunes. Walk through golden sands, admire black volcanic stone fields, and experience the silence and vastness of the desert.",
      description2:
        "Spend peaceful nights under the stars, enjoy candlelight dinners like ancient Berber nomads, and connect with local people to learn about their traditions and lifestyle. A unique blend of adventure, tranquility, and cultural immersion.",
      image: "/images/trekkingTrips/sahara/merzouga-seven-days/journeyImg.jpg",
      elevation: "850m",
      elevationLabel: "Average Altitude",
    },
    trekDetails: [
      { icon: "FaCampground", label: "Camping", value: "Equipment provided" },
      { icon: "FaUtensils", label: "Meals", value: "Breakfast, Lunch, Dinner" },
      { icon: "GiCamel", label: "Luggage", value: "Carried by camels" },
      { icon: "FaTint", label: "Water", value: "Included during trek" },
      { icon: "FaUserTie", label: "Guide", value: "Local expert guide" },
      { icon: "FaCaravan", label: "Camel Driver", value: "Experienced desert team" },
    ],

    timeLine: [
      {
        title: "Day 1 — Discover Erg-Chebbi Dunes by Walking",
        description:
          "Begin your adventure exploring the soft golden dunes of Erg-Chebbi. Learn about the nomadic lifestyle, enjoy the desert silence, and admire the play of light and shadow over the dunes. Return to camp for dinner under the stars.",
        walkingTime: "4–5h walking",
        meals: "L, D",
      },
      {
        title: "Day 2 — Trek to Erg-Chebbi Dunes & Berber Families",
        description:
          "Walk across deep desert landscapes visiting local Berber families. Experience their hospitality, learn desert survival customs, and share tea before camping far from village lights. Enjoy the pure desert night sky.",
        walkingTime: "5–6h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 3 — Hike the Black Desert & Deep Erg-Chebbi Area",
        description:
          "Continue through contrasting terrain—soft sand, black volcanic stones, and hidden oases. Observe nomads’ routes and ancient caravan paths before resting at your desert camp.",
        walkingTime: "5–7h walking",
        meals: "B, L, D",
      },
      {
        title: "Day 4–7 — Extended Sahara Expeditions",
        description:
          "For longer treks, explore further towards Znigui, Ouzina, and the western Merzouga dunes. Each day reveals new landscapes, nomadic encounters, and unforgettable sunsets over the Sahara.",
        walkingTime: "5–7h daily",
        meals: "B, L, D",
      }
    ],

    infoCards: [
      {
        icon: "FaStar",
        title: "Not Included",
        included: false,
        items: [
          "Transportation to/from Merzouga",
          "Travel insurance",
          "Personal expenses",
          "Tips and optional activities"
        ]
      },
      {
        icon: "FaGift",
        title: "Included",
        included: true,
        items: [
          "Camping requirements (tent, mattress, blankets)",
          "Meals: Breakfast, Lunch, Dinner",
          "Camels to carry luggage",
          "Water during the trek",
          "Camel driver and desert crew",
          "Expert local tour guide"
        ]
      }
    ],
    gallery: "/images/trekkingTrips/sahara/merzouga-seven-days/image"
  }
];

