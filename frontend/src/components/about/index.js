import React from "react";
// internal
import TextArea from "./text-area";
import Services from "./services";
import AboutGallery from "./about-gallery";
import AboutFaqs from "./about-faqs";
import Brands from "@components/brands";
import BreadcrumbTwo from "@components/common/breadcrumb/breadcrumb-2";

const About = () => {
  return (
    <React.Fragment>
      <BreadcrumbTwo
        subtitle="About us"
        title={
          <>
            Welcome to our <br /> Ventes Infotech Shop
          </>
        }
      />
      <TextArea />
      <Services />
      <AboutGallery />
      <AboutFaqs />
      <Brands />
    </React.Fragment>
  );
};

export default About;
