import React from "react";
// internal
import { DotsTwo, General, Support } from "@svg/index";
import FaqThumb from "./faq-thumb";
import SingleFaq from "./single-faq";

// single nav
function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// TabItem
export function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {/* <!-- faq item one of community question --> */}
      {accordion_items.map((item, i) => (
        <div key={i} className="faq__item pb-95">
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-2">
              {/* <div className="faq__content">
                <h3 className="faq__title-2">{item.title}</h3>
              </div> */}
            </div>
            <div className="col-xl-11 col-lg-11 col-md-10">
              <div className="faq__wrapper faq__style-4 tp-accordion">
                <div className="accordion" id={`${id}-${i + 1}_accordion`}>
                  {item.accordions.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


const FaqArea = ({ element_faq = false }) => {
  // tab item
  return (
    <React.Fragment>
      {/* faq thumb start */}
      {!element_faq && <FaqThumb />}
      {/* faq thumb end */}

      {/* faq area start */}
      <section className="faq__area pt-100 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__tab-2 tp-tab mb-50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavItem
                      active={true}
                      id="general"
                      icon={<General />}
                      title="General Questions"
                    />
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Community"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem id="support" icon={<Support />} title="Support" />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="faq__item-wrapper">
            <div className="tab-content" id="faqTabContent">
              {/* general */}
              <TabItem
                active={true}
                id="general"
                accordion_items={[
                  {
                    title: (
                      <>
                        Orders <br />& Shipping
                      </>
                    ),
                    accordions: [
                      {
                        id: "One",
                        title: "What types of audio-visual (AV) products do you offer",
                        show: true,
                        desc: "We offer a wide range of AV products, including : Displays and monitors (LED, LCD, and more), Projectors and screens, Professional sound systems and speakers, Microphones and conferencing equipment, AV accessories (cables, mounts, remotes), Video conferencing systems",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Two",
                        title: " How do I choose the right AV products for my needs",
                        desc: "Our website includes detailed product descriptions and specifications to help you make an informed decision. If you need further assistance, you can contact our support team for expert guidance on selecting the best products for your project or business.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Three",
                        title: "Do you provide product installation services",
                        desc: "Yes, we offer professional installation services for most of the AV products we sell. During checkout, you can opt for this service, or you can contact us for more information.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "four",
                        title: "Are the AV products on your website covered by a warrant",
                        desc: "Yes, most of our products come with a manufacturers warranty, which can vary depending on the product. Warranty details are provided in the product descriptions or can be requested from our customer service team.",
                        parent: "general-1_accordion",
                      },

                      {
                        id: "five",
                        title: " Can I request a demo of the AV equipment before purchasing?",
                        show: true,
                        desc: "In some cases, we may offer product demos or video demonstrations. Please contact our sales team to check if demos are available for the products you are interested in.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "What are your delivery and shipping options? ",
                        desc: "We offer multiple shipping options, including standard and expedited delivery. During checkout, you will be able to select your preferred shipping method. We ship both domestically and internationally, depending on the location.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "Do you offer bulk purchasing or discounts for large orders?",
                        desc: "Yes, we offer bulk purchasing options and volume discounts for large orders. For custom quotes or inquiries about bulk purchases, please contact our sales team.",
                        parent: "general-2_accordion",
                      },
                    
                      {
                        id: "eight",
                        title: "What is your return and exchange policy?",
                        show: true,
                        desc: "We have a flexible return and exchange policy. If you are unsatisfied with your purchase, you can return or exchange the item within a specified period (typically 30 days) as long as it is in its original condition. Please refer to our return policy page for more details.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "nine",
                        title:
                          " Do you provide technical support for the AV products purchased?",
                        desc: "Yes, we offer technical support for all AV products purchased through our website. Our team can assist you with setup, troubleshooting, and maintenance queries. You can contact our support team via phone, email, or chat.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title: "Can I request a custom AV solution for my business or venue?",
                        desc: "Absolutely. We specialize in creating custom AV solutions tailored to your specific needs. Whether its for a corporate boardroom, a classroom, or an event venue, our team can design and recommend the best AV setup for you.",
                        parent: "general-3_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* community */}
              {/* <TabItem
                id="community"
                accordion_items={[
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "eleven",
                        title: "Can I cancel my account at any time?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "twelve",
                        title: "What happens after the license expires?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "thirteen",
                        title: "Does Harry have any documentations?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "fourteen",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                    ],
                  },
                ]}
              />
 */}
              {/* support */}
              {/* <TabItem
                id="support"
                accordion_items={[
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "fifteen",
                        title: "Can I cancel my account at any time?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "sixteen",
                        title: "What happens after the license expires?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "seventeen",
                        title: "Does Harry have any documentations?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "eighteen",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                    ],
                  },
                ]}
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
    </React.Fragment>
  );
};

export default FaqArea;
