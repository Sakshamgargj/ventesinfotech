import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@assets/img/slider/14/1.png";
import img2 from "@assets/img/slider/14/2.png";
import img3 from "@assets/img/slider/14/3.png";
import img4 from "@assets/img/slider/14/4.png";
import img5 from "@assets/img/slider/14/5.png";
import img6 from "@assets/img/slider/14/6.png";
import img7 from "@assets/img/slider/14/7.png";
import img8 from "@assets/img/slider/14/8.png";
import img9 from "@assets/img/slider/14/9.png";
import img10 from "@assets/img/slider/14/10.png";
import img11 from "@assets/img/slider/14/11.png";
import img12 from "@assets/img/slider/14/12.png";
import img13 from "@assets/img/slider/14/13.png";
import img14 from "@assets/img/slider/14/14.png";
import img15 from "@assets/img/slider/14/15.png";
import { RightArrow } from "@svg/index";
import Link from "next/link";

const imageList = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
];

const HeroBanner = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 7700); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="cta__area pt-50 pb-50 p-relative include-bg jarallax"
      style={{ backgroundColor:"#fffff1" }}
    >
    <div className="container mt-40" key={animationKey} >
      <div className="row align-self-end">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-5 mt-5">
          <h1 style={{ fontSize: "70px" }} className="slider__content-13 mt-80 animated-text">
            <strong>Experience</strong>
            <br />
            <strong>the Power of</strong>
            <br />
            <strong  style={{ fontSize: "80px" }} >
              <span style={{ color: "#3985ff" }}>Sound</span> and{" "}
              <span style={{ color: "#3985ff" }}>Vision</span>
            </strong>
          </h1>
          <br />
          <div className="slider__btn-13 animated-button">
            <Link href="/shop" className="tp-btn-border">
              Shop Now
              <span>
                <RightArrow />
              </span>
            </Link>
          </div>
        </div>
        <div
          className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"
          style={{
            position: "relative",
            height: "550px",
          }}
        >
          {/* <Image
              className="rounded-full"
              src={img1}
              style={{
                position: "absolute",
                marginTop:"40px",
                width: "100%",
                height: "550px",
              }}
            /> */}
          {imageList.map((img, index) => (
            <Image
              key={index}
              className="rounded-full"
              src={img}
              alt={`Image ${index + 1}`}
              style={{
                position: "absolute",
                // top: 0,
                // left: 0,
                width: "100%",
                marginTop:"40px",
                height: "550px",
                animation: `airdrop-image-pulse 2s ease-in-out forwards`,
                animationDelay: `${index * 0.5}s`,
                opacity: 1,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes airdrop-image-pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
    </section>
  );
};

export default HeroBanner;
