import Link from "next/link";
import React from "react";

const TermsArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">
                  Last updated: September 18, 2018
                </h4>
                <p>
                  These terms apply to all users of [Your AV Industry E-commerce Website], including customers, vendors, and anyone browsing or making a purchase through our website. By using our website, you represent that you are at least the age of majority in your state or province of residence or have the consent of a legal guardian.
                </p>
                <p>
                  We reserve the right to update, change, or replace any part of these terms at our discretion. Changes will be effective when posted on this page. Your continued use of the website following the posting of changes constitutes acceptance of those changes.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Products and Services</h3>

                <p>
                <b>Availability</b><br /> We strive to ensure that all product descriptions, pricing, availability, and promotions on the website are accurate. However, we cannot guarantee that the information is complete or current. We reserve the right to modify or discontinue products or services at any time without notice.
                </p>
                <p>
                <b>Pricing</b><br /> All prices listed on the website are in [currency] and are subject to change without notice. While we do our best to ensure accuracy, errors in pricing or product details may occur. If we discover an error, we will notify you and give you the option to confirm the purchase at the correct price or cancel your order.
                </p>
                <p>
                <b>Product Images</b><br /> Images of products on our website are for illustrative purposes only. Actual products may vary slightly in appearance due to manufacturer changes, product upgrades, or variations in lighting or screen settings.
                </p>
                <p>
                <b>Orders and Payments</b><br /> By placing an order on our website, you agree to provide current, complete, and accurate billing and shipping information. We reserve the right to refuse or cancel any order for any reason, including availability, errors in the description or price of the product, or suspected fraudulent activity. Payment must be made using the methods provided on the website. Your order will only be processed once payment has been successfully completed.
                </p>
              </div>


              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Shipping and Delivery</h3>

                <p>
                <b>Shipping Options</b><br /> We offer a variety of shipping methods. Shipping fees and delivery times will depend on your location and the shipping method you choose at checkout.
                </p>
                <p>
                <b>Delivery</b><br /> Delivery dates are estimates and are subject to change due to circumstances beyond our control. We are not responsible for delays caused by shipping carriers, customs, or other external factors. Once your order has shipped, you will receive a tracking number to monitor the status of your delivery.
                </p>
                <p>
                <b>Risk of Loss</b><br /> Risk of loss and title for items purchased from our website pass to you upon delivery of the products to the shipping carrier.
                </p>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">
                  Purposes of these Terms and Conditions:
                </h3>
                <ul>
                  <li>
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    &quot;control&quot; means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </li>
                  
                  <li>
                    <strong>Company</strong> (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to Ventes Infotech.
                  </li>
                  
                  <li>
                    <strong>Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong>Website</strong> refers to Ventes Infotech, accessible from{" "}
                    <Link
                      href="/"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      ventesinfotech.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact us</h3>
                <p>If you have any questions about these terms or any other inquiries, please contact us :</p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:harry.com">ventesinfotech@gmail.com</a>
                    </span>
                  </li>
                </ul>

                <div className="policy__address">
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                      target="_blank"
                    >
                      VENTES INFOTECH PVT LTD <br /> 25/3 EROS Apartment Nehru Place, New Delhi-110019
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsArea;
