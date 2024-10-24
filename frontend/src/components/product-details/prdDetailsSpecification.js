import React from "react";
// internal

const PrdDetailsSpecification = ({product}) => {
  return (
    <div className="product__details-description pt-40">
      <div className="row">
        <div className="col-lg-12">
          <div className="product__details-description-content">
            <p>
            {product?.specification.map(e=><li>{e.skey}:{e.svalue}</li>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdDetailsSpecification;
