import React from "react";
import PrdDetailsDescription from "./prd-details-description";

const PrdDetailsTabNav = () => {
  return (
    <nav>
      <div className="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap">
        <button style={{fontSize:"30px"}} className="nav-link active" id="nav-desc-tab" type="button">
          Description
        </button>
        <span className="pt-20" style={{fontSize:"30px"}}>|</span>
        <button style={{fontSize:"30px"}} className="nav-link active" id="nav-desc-tab" type="button">
          Specification
        </button>
        <PrdDetailsDescription/>
      </div>
    </nav>
  );
};

export default PrdDetailsTabNav;
