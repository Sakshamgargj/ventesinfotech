import React from "react";
// internal
import { Play } from "@svg/index";
import faq_bg from "@assets/img/faq/faq-img.jpg";
import SingleFaq from "@components/faq/single-faq";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const faq_items = [
  {
    id: "about-one",
    title: "How do I choose the right AV products for my needs?",
    show: true,
    desc: "Our website includes detailed product descriptions and specifications to help you make an informed decision. If you need further assistance, you can contact our support team for expert guidance on selecting the best products for your project or business.",
    parent: "faqaccordion",
  },
  {
    id: "about-two",
    title: "Do you offer bulk purchasing or discounts for large orders?",
    desc: "Yes, we offer bulk purchasing options and volume discounts for large orders. For custom quotes or inquiries about bulk purchases, please contact our sales team.",
    parent: "faqaccordion",
  },
  {
    id: "about-three",
    title: " Can I request a custom AV solution for my business or venue? ",
    desc: "Absolutely. We specialize in creating custom AV solutions tailored to your specific needs. Whether its for a corporate boardroom, a classroom, or an event venue, our team can design and recommend the best AV setup for you.",
    parent: "faqaccordion",
  },
];

const AboutFaqs = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <section className="faq__area p-relative">
        <div
          className="faq__video"
          style={{ backgroundImage: `url(${faq_bg.src})` }}
        >
          <div className="faq__video-btn">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setIsVideoOpen(true)}
              className="tp-pulse-border popup-video"
            >
              <Play />
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="faq__wrapper-2 faq__gradient-border faq__style-2 tp-accordion pl-160">
                <div className="faq__title-wrapper">
                  <span className="faq__title-pre">
                   Get in touch with us to see how
                  </span>
                  <h3 className="faq__title">
                    Provide smart and flexible digital services
                  </h3>
                </div>
                <div className="accordion" id="faqaccordion">
                  {faq_items.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"FWrz3bT-YoE"}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default AboutFaqs;
