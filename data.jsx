const fitnessProducts = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71gQNJJi2CL._SL1500_.jpg",
    name: "Optimum Nutrition Gold Standard Whey Protein - 2 lbs, Double Rich Chocolate",
    price: "₹4,899",
    link: "https://www.amazon.in/dp/B002DYIZH6",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61GrVvhYwUL._SX679_.jpg",
    name: "MuscleBlaze Beginner's Whey Protein 1 kg with Digezyme, Chocolate",
    price: "₹1,370",
    link: "https://www.amazon.in/MuscleBlaze-Beginners-Protein-Supplement-Chocolate/dp/B0791H11NF?th=1",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61MovaZK9iL._AC_SL1500_.jpg",
    name: "Yes4All Vinyl Hexagon Dumbbell - Dumbbells Set of 2 Hand Weights.",
    price: "₹3,999",
    link: "https://www.amazon.com/Yes4All-Dumbbell-Vinyl-Coated-Nautical/dp/B0D5XQDCGJ/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.1091e5b8-0ff4-492a-aa0b-7bc8b59253c6%3Aamzn1.sym.1091e5b8-0ff4-492a-aa0b-7bc8b59253c6&cv_ct_cx=amazonbasics%2Bneoprene%2Bdumbbells&keywords=amazonbasics%2Bneoprene%2Bdumbbells&pd_rd_i=B0D5XQDCGJ&pd_rd_r=584086e1-17d2-486d-8262-5ee33003a415&pd_rd_w=8GI83&pd_rd_wg=95RY0&pf_rd_p=1091e5b8-0ff4-492a-aa0b-7bc8b59253c6&pf_rd_r=K03EJQE951ES1HZJGR3H&qid=1744091365&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-4-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/61OU8MggvQL._AC_.jpg",
    name: "FORZA Air Bike | Heavy Duty Exercise Bike with Digital Monitor",
    price: "₹59,499",
    link: "https://www.amazon.com/FORZA-Heavy-Exercise-Digital-Monitor/dp/B0DQ2738XZ",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SL1500_.jpg",
    name: "Fitbit Charge 6 Fitness Tracker with Google apps.",
    price: "₹15,999",
    link: "https://www.amazon.com/Fitbit-Exercise-Equipment-6-Months-Membership/dp/B0CC62ZG1M",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/61pLkhp7IKL._SL1500_.jpg",
    name: "NUTRABAY Pure 100% Raw Whey Protein Concentrate, 23.4g Protein - 1Kg, Unflavoured",
    price: "₹2,199",
    link: "https://www.amazon.in/Nutrabay-Whey-Protein-Concentrate-Unflavoured/dp/B07T1K4S2Z?th=1",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 7,
    image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/P4HM5yhm1LktsPbAd2nQLXfh",
    name: "Cult Sport Adjustable Bench Press (Black)",
    price: "₹9,999",
    link: "https://cultsport.com/adjustable-workout-bench/product/3160",
    company: "Cultsport",
    imageSource: "Unsplash"
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/618sHIqH+VL._SL1000_.jpg",
    name: "Noise ColorFit Pro 5 Smart Watch with Bluetooth Calling",
    price: "₹4,999",
    link: "https://www.amazon.in/Noise-Biggest-personalization-Productivity-Starlight/dp/B0CFYNB5NF",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/71W0FsMwOAL._SL1500_.jpg",
    name: "HealthKart hk vitals Protein Active (Chocolate, 400g / 0.88lbs) with Shaker, 650ml | Combo Pack",
    price: "₹700",
    link: "https://www.amazon.in/HealthKart-ProteinUp-Strength-Immunity-Chocolate/dp/B0B5TBCCGZ?th=1",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/61lFd8xJPuL._AC_SL1500_.jpg",
    name: "AS-IT-IS Nutrition ATOM Whey Protein - 1 kg, Chocolate",
    price: "₹2,299",
    link: "https://www.amazon.com/Asitis-Nutrition-Digestive-Certified-Chocolate/dp/B09DKFPQ91",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 11,
    image: "https://m.media-amazon.com/images/I/61tvzXapfRL._AC_SL1200_.jpg",
    name: "SPARNOD FITNESS Treadmill Electric Motorized 2.5HP",
    price: "₹24,999",
    link: "https://www.amazon.sa/-/en/Treadmill-Automatic-STH-5000-Foldable-Motorized/dp/B084P9FQ7X",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 12,
    image: "https://m.media-amazon.com/images/I/71ZpTKnq18L._AC_SL1500_.jpg",
    name: "Fire-Boltt Phoenix Pro Smart Watch with SpO2 Monitoring",
    price: "₹2,499",
    link: "https://www.amazon.com/Fire-Boltt-Phoenix-Bluetooth-Assistant-Monitoring/dp/B0BRKZG8GH?th=1",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 13,
    image: "https://m.media-amazon.com/images/I/71-dEyf8OvL._SL1500_.jpg",
    name: "Nakpro Performance Whey Protein - 1 kg, Chocolate",
    price: "₹2,199",
    link: "https://www.amazon.in/NAKPRO-Perform-Concentrate-Recovery-Chocolate/dp/B08DL1DKKM?th=1",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 14,
    image: "https://m.media-amazon.com/images/I/710qoIH9YRL._SL1500_.jpg",
    name: "Big Muscles Nutrition Premium Gold Whey Protein - 1 kg, Chocolate",
    price: "₹2,699",
    link: "https://www.amazon.in/Bigmuscles-Nutrition-Chocolate-Concentrate-Glutamic/dp/B084H8LWC3?th=1",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 15,
    image: "https://m.media-amazon.com/images/I/71zSF1WcaiL._AC_SL1500_.jpg",
    name: "YesAll4 Neoprene Coated Kettlebells - 8 kg",
    price: "₹1,499",
    link: "https://www.amazon.com/Yes4All-Neoprene-Kettlebell-Strength-Kettlebells/dp/B09SG8M8FP",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 16,
    image: "https://m.media-amazon.com/images/I/819g5mIob0S._AC_SL1500_.jpg",
    name: "Hex Dumbbells PVC Encase Coating Free Weight Dumbbell Set.",
    price: "₹1,799",
    link: "https://www.amazon.com/AIMEISHI-Dumbbells-Dumbbell-Strength-Training/dp/B093KNY3QV/ref=sr_1_3_sspa?adgrpid=1346904259408927&dib=eyJ2IjoiMSJ9.Sq8OGHW8r0LNzPom_htq3gAWcIYwyIDDspeKDzHJDeU00GveSej5iEqQjpFfvTubHv5QJtYclRtKhlr-GkldMI9O5y-_AZru9OeQOQgeN6EBe0jcNY9yEro9K-D7dSDtZYjCZdTesLupHZcDf8u2fnjcpmgYVjxfDWCHtO-ZeTBGvHk72LUXCykKyO95GWPCGARtz4z-ySPx-rwmUpMeQ3ok0xzAsWKe0RseDgJGx1-nxj5rAeH9QMYcIWoWoSu7J5VvRP2E-pGpiJIS5LM-IGiWHTBm6VFhSVV_RZhnGuI.sHdofZMQbHrzxRjj5zgZMxhu419vOsry1gbTDBs_LN4&dib_tag=se&hvadid=84181792323834&hvbmt=bp&hvdev=c&hvlocphy=149870&hvnetw=o&hvqmt=p&hvtargid=kwd-84182671853744%3Aloc-90&hydadcr=15158_13516539&keywords=5%2Bkg%2Bdumbbell%2Bset&mcid=cc1984dbf863335e9d3573c7b4621d6f&msclkid=0208f77058a316c780629084eb0f57f7&qid=1744090037&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 17,
    image: "https://m.media-amazon.com/images/I/61jecdXQiWS._AC_SL1500_.jpg",
    name: "Garmin Venu 2 GPS Smartwatch with AMOLED Display",
    price: "₹39,999",
    link: "https://www.amazon.com/Garmin-Smartwatch-Advanced-Monitoring-Features/dp/B0912JT6R1",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 18,
    image: "https://m.media-amazon.com/images/I/616RddiF8aL._AC_SL1355_.jpg",
    name: "Amazfit GTS 4 Mini Smart Watch with Blood Oxygen Monitor",
    price: "₹7,999",
    link: "https://www.amazon.com/Amazfit-Fitness-Tracker-Battery-Compatible-Black/dp/B09Z6GMPC6?th=1",
    company: "Amazon",
    imageSource: "Pexels"
  },
  {
    id: 19,
    image: "https://m.media-amazon.com/images/I/61GrVvhYwUL._SL1500_.jpg",
    name: "Myprotein Impact Whey Protein - 2.5 kg, Chocolate Smooth",
    price: "₹5,999",
    link: "https://www.amazon.in/MuscleBlaze-Beginners-Protein-Supplement-Chocolate/dp/B0791H11NF?th=1",
    company: "Amazon",
    imageSource: "Unsplash"
  },
  {
    id: 20,
    image: "https://m.media-amazon.com/images/I/61SCI+aH6jL._AC_SL1500_.jpg",
    name: "GNC Pro Performance 100% Whey Protein - 1 kg, Chocolate",
    price: "₹3,999",
    link: "https://www.amazon.com/GNC-Pro-Performance-Whey-Protein/dp/B06XNMNZMV",
    company: "Amazon",
    imageSource: "Pexels"
  }
];


export const topFitnessInfluencers = [
  {
    id: 1,
    image: "https://www.dr-muscu.fr/wp-content/uploads/2021/09/Simeon-panda.jpg",
    name: "Simeon Panda",
    followers: "8.5 million",
    social_media: {
      instagram: "https://www.instagram.com/simeonpanda/",
      youtube: "https://www.youtube.com/channel/UCr87kA5r2qO72b1XrJE8ZHg"
    }
  },
  {
    id: 2,
    image: "https://www.thefamouspeople.com/profiles/images/kayla-itsines-3.jpg",
    name: "Kayla Itsines",
    followers: "16.2 million",
    social_media: {
      instagram: "https://www.instagram.com/kayla_itsines/",
      youtube: "https://www.youtube.com/channel/UC709r57tHSbJ5Gfw2c3Ou9w"
    }
  },
  {
    id: 3,
    image: "https://www.thefamouspeople.com/profiles/images/michelle-lewin-3.jpg",
    name: "Michelle Lewin",
    followers: "16.2 million",
    social_media: {
      instagram: "https://www.instagram.com/michelle_lewin/",
      youtube: "https://www.youtube.com/user/MichelleLewin"
    }
  },
  {
    id: 4,
    image: "https://www.12thblog.com/wp-content/uploads/2019/04/Jen-Selter-19-1024x1024.jpg",
    name: "Jen Selter",
    followers: "14.1 million",
    social_media: {
      instagram: "https://www.instagram.com/jenselter/",
      youtube: "https://www.youtube.com/user/JenSelter"
    }
  },
  {
    id: 5,
    image: "http://content.assets.pressassociation.io/2018/01/26114411/268ce726-0da9-4b69-ac89-59197e197678.jpg",
    name: "Joe Wicks",
    followers: "4.8 million",
    social_media: {
      instagram: "https://www.instagram.com/thebodycoach/",
      youtube: "https://www.youtube.com/channel/UCa0TwqL51yMvT83oOaPq1ZA"
    }
  },
  {
    id: 6,
    image: "https://chloeting.com/_next/static/media/blackjumper.ae80cdca.jpg",
    name: "Chloe Ting",
    followers: "4.2 million",
    social_media: {
      instagram: "https://www.instagram.com/chloe_ting/",
      youtube: "https://www.youtube.com/channel/UCKaSw4LCvJgsr4CqaVqN2qw"
    }
  },
  {
    id: 7,
    image: "http://cdn.magzter.com/1387309098/1537186934/articles/5bb4a73252ce3/crp_ChrisBumsteadAs-Classic-Physique-GrowsSo-Does-He.jpg",
    name: "Chris Bumstead",
    followers: "26 million",
    social_media: {
      instagram: "https://www.instagram.com/cbum/",
      youtube: "https://www.youtube.com/channel/UC3lQ8--NXt4nO0u6z4xWvIQ"
    }
  },
  {
    id: 8,
    image: "https://1.bp.blogspot.com/-NynvN-rS184/WPF-YW01lyI/AAAAAAAAACI/XJKwTIykjYM32ZdxEzSXAQSyZe2YTFy4QCLcB/s1600/Lazar-Angelov-tattoo-on-forearm.jpg",
    name: "Lazar Angelov",
    followers: "6.3 million",
    social_media: {
      instagram: "https://www.instagram.com/lazar_angelov_official/",
      youtube: "https://www.youtube.com/user/LazarAngelovOfficial"
    }
  },
  {
    id: 9,
    image: "https://tikkaykhan.com/wp-content/uploads/2023/04/andrei-deiu-bodybuilder-768x960.jpg",
    name: "Andrei Deiu",
    followers: "6 million",
    social_media: {
      instagram: "https://www.instagram.com/andreideiu_/",
      youtube: "https://www.youtube.com/channel/UCS7i0vPtwlN3e0i76i8oL4w"
    }
  },
  {
    id: 10,
    image: "https://es.stylevore.com/wp-content/uploads/2019/12/73446506_433986567538720_6148170419738199227_n.jpg",
    name: "Eva Andressa",
    followers: "6 million",
    social_media: {
      instagram: "https://www.instagram.com/eva_andressa/",
      youtube: "https://www.youtube.com/user/evaandressavieira"
    }
  },
  {
    id: 11,
    image: "https://tikkaykhan.com/wp-content/uploads/2022/03/Sadik-Hadzovik-BodyBuilding.png",
    name: "Sadik Hadzovic",
    followers: "4.2 million",
    social_media: {
      instagram: "https://www.instagram.com/sadikhadzovic/",
      youtube: "https://www.youtube.com/user/SadikHadzovicOfficial"
    }
  },
  {
    id: 12,
    image: "https://i.pinimg.com/originals/17/40/62/174062a68da4fb40e47450cd45fd71bc.jpg",
    name: "Whitney Simmons",
    followers: "4.2 million",
    social_media: {
      instagram: "https://www.instagram.com/whitneyysimmons/",
      youtube: "https://www.youtube.com/channel/UC2o88gS5AkYQbT2c0I7ueGg"
    }
  },
  {
    id: 13,
    image: "https://i.pinimg.com/originals/b7/a5/62/b7a562192011ec7ac1929ae629b356ee.jpg",
    name: "Ana Cozar",
    followers: "3.9 million",
    social_media: {
      instagram: "https://www.instagram.com/espana927/",
      youtube: "https://www.youtube.com/user/AnaCozarFitness"
    }
  },
  {
    id: 14,
    image: "https://www.thefamouspeople.com/profiles/images/cassey-ho-3.jpg",
    name: "Cassey Ho",
    followers: "2.2 million",
    social_media: {
      instagram: "https://www.instagram.com/blogilates/",
      youtube: "https://www.youtube.com/user/blogilates"
    }
  },
  {
    id: 15,
    image: "https://layoga.com/wp-content/uploads/2022/04/EmilySkyeBio.jpg",
    name: "Emily Skye",
    followers: "2.7 million",
    social_media: {
      instagram: "https://www.instagram.com/emilyskyefit/",
      youtube: "https://www.youtube.com/user/EmilySkyeFit"
    }
  },
  {
    id: 16,
    image: "https://www.thefamouspeople.com/profiles/images/massy-arias-2.jpg",
    name: "Massy Arias",
    followers: "2.8 million",
    social_media: {
      instagram: "https://www.instagram.com/massy.arias/",
      youtube: "https://www.youtube.com/user/Mankofit"
    }
  },
  {
    id: 17,
    image: "https://cdn.shopify.com/s/files/1/0669/7933/files/1_73c2289d-25cf-457a-adc5-139dc2d45e51.png?v=1578528070",
    name: "Kali Burns",
    followers: "1.2 million",
    social_media: {
      instagram: "https://www.instagram.com/kaliburns/",
      youtube: "https://www.youtube.com/channel/UCi9X8o0k6Z8z7z8z7z8z7z8"
    }
  },
  {
    id: 18,
    image: "https://nationaltoday.com/wp-content/uploads/2022/09/channels4_profile-900x834.jpg.webp",
    name: "Krissy Cela",
    followers: "3.1 million",
    social_media: {
      instagram: "https://www.instagram.com/krissycela/",
      youtube: "https://www.youtube.com/channel/UC2o88gS5AkYQbT2c0I7ueGg"
    }
  },
  {
    id: 19,
    image: "https://amp.fitforfun.de/files/images/202301/1/pamela-reif-ernaehrung,543330_m_xl.jpg",
    name: "Pamela Reif",
    followers: "9.5 million",
    social_media: {
      instagram: "https://www.instagram.com/pamela_reif/",
      youtube: "https://www.youtube.com/channel/UCBN2e-aNHPG1fsU9mreNEkQ"
    }
  },
  {
    id: 20,
    image: "https://www.drworkout.fitness/wp-content/uploads/2021/07/Lauren-Drain-Workout.jpg",
    name: "Lauren Drain",
    followers: "3.8 million",
    social_media: {
      instagram: "https://www.instagram.com/laurendrainfit/",
      youtube: "https://www.youtube.com/user/TheLaurenDrain"
    }
  },
  {
    id: 21,
    image: "https://www.greatestphysiques.com/wp-content/uploads/2016/07/Jeff-no18-768x750.jpg",
    name: "Jeff Seid",
    followers: "4.1 million",
    social_media: {
      instagram: "https://www.instagram.com/jeff_seid/",
      youtube: "https://www.youtube.com/user/JeffSeidOfficial"
    }
  },
  {
    id: 22,
    image: "https://www.edmchicago.com/wp-content/uploads/2020/05/ana-cheri--e1588608489208.jpg",
    name: "Ana Cheri",
    followers: "12.5 million",
    social_media: {
      instagram: "https://www.instagram.com/anacheri/",
      youtube: "https://www.youtube.com/user/AnaCheriOfficial"
    }
  },
  {
    id: 23,
    image: "http://s.glbimg.com/es/ge/f/original/2014/08/14/bella-falconi_mma_evelynrodrigues-12_85.jpg",
    name: "Bella Falconi",
    followers: "4 million",
    social_media: {
      instagram: "https://www.instagram.com/bellafalconi/",
      youtube: "https://www.youtube.com/user/BellaFalconiFit"
    }
  },
  {
    id: 24,
    image: "https://sustainhealth.fit/wp-content/uploads/2021/03/zack-george-1.png",
    name: "Zack George",
    followers: "1.1 million",
    social_media: {
      instagram: "https://www.instagram.com/zackgeorge/",
      youtube: "https://www.youtube.com/channel/UCi9X8o0k6Z8z7z8z7z8z7z8"
    }
  },
  {
    id: 25,
    image: "https://www.thelist.com/img/gallery/the-untold-truth-of-yoga-with-adrienes-adriene-mishler/adriene-mishler-is-also-a-pretty-successful-actor-1614786509.jpg",
    name: "Adriene Mishler",
    followers: "1.3 million",
    social_media: {
      instagram: "https://www.instagram.com/adrienne_yogawithadriene/",
      youtube: "https://www.youtube.com/user/yogawithadriene"
    }
  }
];

export const topHealthyFoods = [
  {
    name: "Spinach",
    url: "https://images.unsplash.com/photo-1576045057995-568f588f82fb"
  },
  {
    name: "Blueberries",
    url: "https://www.plantnet.com.au/wp-content/uploads/plantnet-category-blueberries.jpg"
  },
  {
    name: "Salmon",
    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
  },
  {
    name: "Avocados",
    url: "https://www.inran.it/wp-content/uploads/2017/02/Avocado.jpg"
  },
  {
    name: "Sweet Potatoes",
    url: "https://images.heb.com/is/image/HEBGrocery/000318978-1"
  },
  {
    name: "Broccoli",
    url: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c"
  },
  {
    name: "Almonds",
    url: "https://www.aahaarexpert.com/wp-content/uploads/2018/01/almond-1024x1024.jpg"
  },
  {
    name: "Greek Yogurt",
    url: "https://static.toiimg.com/photo/75220490.cms"
  },
  {
    name: "Quinoa",
    url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/quinoa-fried-rice.jpg"
  },
  {
    name: "Eggs",
    url: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc"
  }
];

export default fitnessProducts;