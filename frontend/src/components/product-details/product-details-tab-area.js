import React, { useState } from "react";
import PrdDetailsDescription from "./prd-details-description";
import PrdDetailsSpecification from "./prdDetailsSpecification";

const ProductDetailsTabArea = ({product}) => {
  const [activeTab, setActiveTab] = useState("description");

  function updateDescription() {
    setActiveTab("description");
  }
  function updateSpecification() {
    setActiveTab("specification");
  }

  return (
    <section className="product__details-tab-area pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="product__details-tab-nav">
              <nav>
                <div className="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap">
                  {/* Both buttons always visible */}
                  <button
                    onClick={updateDescription}
                    style={{ fontSize: "30px" }}
                    className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                    id="nav-desc-tab"
                    type="button"
                  >
                    Description
                  </button>
                  <span className="pt-15" style={{color:"black", fontSize: "30px" }}>|</span>
                  <button
                    onClick={updateSpecification}
                    style={{ fontSize: "30px" }}
                    className={`nav-link ${activeTab === "specification" ? "active" : ""}`}
                    id="nav-spec-tab"
                    type="button"
                  >
                    Specification
                  </button>
                </div>
              </nav>
            </div>
            <div className="product__details-tab-content">
              <div className="tab-content" id="nav-tabContent-info">
                <div className="tab-pane active" id="nav-desc">
                  {/* Show content based on active tab */}
                  {activeTab === "description" && (
                    <PrdDetailsDescription product={product} />
                  )}
                  {activeTab === "specification" && (
                    <PrdDetailsSpecification product={product} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTabArea;
