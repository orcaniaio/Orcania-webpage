import {
  polygon_logo,
  harmony_logo,
  traf,
  meconcash,
  chaocticDjs,
} from "images.js";

const templatePartnerSection = [
  {
    link: "https://www.polygon.technology/",
    logo: polygon_logo,
    alt: "Polygon",
  },
  {
    link: "https://www.harmony.one/",
    logo: harmony_logo,
    alt: "Harmony",
  },
];

const templatePartnerSecondDiv = [
  {
    link: "https://www.theredapefamily.com/home",
    logo: traf,
    alt: "The Red Ape Family",
  },
  {
    link: "https://www.meconcash.com/index_en.html",
    logo: meconcash,
    alt: "Meconcash",
  },
  {
    link: "https://www.chaoticdjs.com/",
    logo: chaocticDjs,
    alt: "Chaoctic DJs",
  },
];

let partnerSection = [];
let partnerSectionSecondDivision = [];

for (let i = 0; i < 10; i++) {
  partnerSection = [...partnerSection, ...templatePartnerSection];
}

for (let i = 0; i < 10; i++) {
  partnerSectionSecondDivision = [
    ...partnerSectionSecondDivision,
    ...templatePartnerSecondDiv,
  ];
}

export { partnerSection, partnerSectionSecondDivision };
