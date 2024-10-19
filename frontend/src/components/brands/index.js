// external
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import brand_1 from "@assets/img/brands/brand-1.png";
import brand_2 from "@assets/img/brands/brand-2.png";
import brand_3 from "@assets/img/brands/brand-3.png";
import brand_4 from "@assets/img/brands/brand-4.png";
import brand_5 from "@assets/img/brands/brand-5.png";
import brand_6 from "@assets/img/brands/brand-6.png";
import brand_7 from "@assets/img/brands/brand-7.png";
import brand_8 from "@assets/img/brands/brand-8.png";
import brand_9 from "@assets/img/brands/brand-9.png";
import brand_10 from "@assets/img/brands/brand-10.png";
import brand_11 from "@assets/img/brands/brand-11.png";
import brand_12 from "@assets/img/brands/brand-12.png";
import brand_13 from "@assets/img/brands/brand-13.png";
import brand_14 from "@assets/img/brands/brand-14.png";
import brand_15 from "@assets/img/brands/brand-15.png";
import brand_16 from "@assets/img/brands/brand-16.png";
import brand_17 from "@assets/img/brands/brand-17.png";
import brand_18 from "@assets/img/brands/brand-18.png";
import brand_19 from "@assets/img/brands/brand-19.png";
import brand_20 from "@assets/img/brands/brand-20.png";
import brand_21 from "@assets/img/brands/brand-21.png";
import brand_23 from "@assets/img/brands/brand-23.png";
import brand_24 from "@assets/img/brands/brand-24.png";
import brand_25 from "@assets/img/brands/brand-25.png";
import brand_26 from "@assets/img/brands/brand-26.png";
import brand_27 from "@assets/img/brands/brand-27.png";
import brand_28 from "@assets/img/brands/brand-28.png";
import brand_29 from "@assets/img/brands/brand-29.png";
import brand_30 from "@assets/img/brands/brand-30.png";
import brand_31 from "@assets/img/brands/brand-31.png";
import brand_32 from "@assets/img/brands/brand-32.png";
import brand_33 from "@assets/img/brands/brand-33.png";
import brand_34 from "@assets/img/brands/brand-34.png";

// slider setting 1
const settings_1 = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const settings_2 = {
  speed: 3000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: false,
  buttons: false,
};

// data
const brand_1_data = [
  { brand: brand_1 },
  { brand: brand_2 },
  { brand: brand_3 },
  { brand: brand_4 },
  { brand: brand_5 },
  { brand: brand_6 },
  { brand: brand_7 },
  { brand: brand_8 },
  { brand: brand_9 },
  { brand: brand_10 },
  { brand: brand_11 },
  { brand: brand_12 },
  { brand: brand_13 },
  { brand: brand_14 },
  { brand: brand_15 },
  { brand: brand_16 },
  { brand: brand_33 },
];
const brand_2_data = [
  { brand: brand_17 },
  { brand: brand_18 },
  { brand: brand_19 },
  { brand: brand_20},
  { brand: brand_21 },
  { brand: brand_23 },
  { brand: brand_24 },
  { brand: brand_25 },
  { brand: brand_26 },
  { brand: brand_27 },
  { brand: brand_28 },
  { brand: brand_29 },
  { brand: brand_30 },
  { brand: brand_31 },
  { brand: brand_32 },
  { brand: brand_34 },
];

const Brands = () => {
  const sliderRef = useRef();
  let autoplayOn = true;
  let autoplaySpeed = 0;
  useEffect(() => {
    setInterval(function () {
      if (!autoplayOn) return;
      sliderRef?.current?.slickPrev();
    }, autoplaySpeed);
  }, [autoplayOn, autoplaySpeed]);

  return (
    <>
      <section
        className={`brand__area pb-120  mt-5`}
      >
        <div className="container-fluid g-0">
          <h1 className="text-center mt-10">Brands</h1>
          <div className="row gx-0 gy-2">
            <div className="col-xxl-12">
              <div className={`brand__slider-5`}>
                <div className="brand__slider-5">
                  <Slider {...settings_1} className="brand__slider-active-5">
                    {brand_1_data.map((brand, i) => (
                      <div key={i} className="brand__item-5">
                        <Image style={{width:"200px",height:"100px"}} src={brand.brand} alt="brand" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className={`brand__slider-5-1 `}>
                <div className="brand__slider-5">
                  <Slider
                    {...settings_2}
                    className="brand__slider-active-5-1"
                    ref={sliderRef}
                  >
                    {brand_2_data.map((brand, i) => (
                      <div key={i} className="brand__item-5">
                        <Image style={{width:"200px",height:"100px"}} src={brand.brand} alt="brand" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className={`brand__slider-5`}>
                <div className="brand__slider-5">
                  <Slider {...settings_1} className="brand__slider-active-5">
                    {brand_1_data.map((brand, i) => (
                      <div key={i} className="brand__item-5">
                        <Image style={{width:"200px",height:"100px"}} src={brand.brand} alt="brand" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
