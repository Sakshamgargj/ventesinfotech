import React from "react";

const PolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">Effective date: May 25, 2018</h4>
                <p>
                At https://ventesinfotech.com, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the personal information you provide to us through our website.
                <br/>
                By using our website, you agree to the terms outlined in this Privacy Policy.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Information Collection</h3>
                <p>
                We collect several types of information to ensure we can provide you with the best experience and service:
                </p>
                <ul>
                  <li><h5>Personal Information : </h5> Name, Email, Phone Number, Billing and Shipping Address, Payment information (credit card details, etc.)</li>
                  <li><h5>Non-Personal Information : </h5> Browser type and version, Device information, IP address, Billing and Shipping Address, Payment information (credit card details, etc.)</li>
                </ul>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">Use of Personal Information</h3>
                <ul>
                  <li>To Process Orders : We use your personal information to process your orders, handle payments, deliver products, and provide customer service.</li>
                  <li>To Communicate With You : We use your contact information to send you updates related to your orders, respond to your inquiries, and provide you with product information or promotions that may interest you.</li>
                  <li>
                  For Marketing Purposes : With your consent, we may use your email address to send promotional materials, newsletters, or special offers. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.
                  </li>
                  <li>
                  To Improve Our Website : We use non-personal information to analyze website traffic, understand user behavior, and improve the user experience on our website.
                  </li>
                  <li>For Legal and Security Purposes : We may use your information to protect against fraud, comply with legal obligations, and ensure the security of our website and services.</li>
                </ul>
              </div>
              <div className="policy__list mb-35">
                <h3 className="policy__title">How We Protect Your Information</h3>
                <p>We implement appropriate technical and organizational measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction. This includes secure servers, encryption of payment information, and limited access to your data by authorized personnel only.</p>
                <p>Despite our best efforts, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
              </div>
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us :</p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:ventes.com">ventesinfotech@gmail.com </a>
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

export default PolicyArea;
