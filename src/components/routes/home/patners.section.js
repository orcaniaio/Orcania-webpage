//import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import {
  traf,
  cc,
  bigtoys,
  meconcash,
  polygon_logo,
  harmony_logo,
} from "images";

const data = [
  {
    image: traf,
  },
  {
    image: cc,
  },
  {
    image: bigtoys,
  },
  {
    image: meconcash,
  },
  {
    image: polygon_logo,
  },
  {
    image: harmony_logo,
  },
];

const options = {
  type: "loop",
  rewind: false,
  arrows: "slider",
  perPage: 4,
  isNavigation: false,
  pagination: true,
  perMove: 1,
  autoplay: true,
  breakpoints: {
    1200: { perPage: 3 },
    800: { perPage: 2 },
    600: { perPage: 1 },
  },
};

const PatnersSection = () => {
  return (
    <div>
      <Splide options={options}>
        {data.map((item, i) => (
          <SplideSlide
            key={i}
            hasSliderWrapper
            hasAutoplayControls
            hasAutoplayProgress
          >
            <div className="mx-3">
              <img src={item.image} alt="" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default PatnersSection;
