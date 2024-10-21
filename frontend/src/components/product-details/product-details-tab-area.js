import React, { useState } from "react";
import PrdDetailsDescription from "./prd-details-description";
import PrdDetailsTabNav from "./prd-details-tab-nav";

const ProductDetailsTabArea = ({product}) => {
  let [change,setChange] = useState(product)

  function updateDescription (){
    setChange(product)
  }
  function updateSpecification (){
    setChange()
  }

  return (
    <section className="product__details-tab-area pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="product__details-tab-nav">
              {/* nav tab */}
              {/* <PrdDetailsTabNav /> */}
              {/* nav tab */}
              <nav>
                <div className="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap">
                  <button onClick={updateDescription} style={{fontSize:"30px"}} className="nav-link active" id="nav-desc-tab" type="button">
                    Description
                  </button>
                  <span className="pt-20" style={{fontSize:"30px"}}>|</span>
                  <button onClick={updateSpecification} style={{fontSize:"30px"}} className="nav-link active" id="nav-desc-tab" type="button">
                    Specification
                  </button>
                  <PrdDetailsDescription/>
                </div>
              </nav>
            </div>
            <div className="product__details-tab-content">
              <div className="tab-content" id="nav-tabContent-info">
                <div
                  className="tab-pane active"
                  id="nav-desc"
                >
                  <PrdDetailsDescription product={change} />
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
