import React from 'react'
import './ProductCard.css'
const ProductCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-4 card1" id="card1">
        <img
          src="https://surpriseplaza.com/616-superlarge_default/albeni-chocolate-bar.jpg"
          className="card-img-top"
          id="card-img-top"
          alt="..."
        />
        <div className="card-body " id="card-body">
          <h5 className="card-title">albeni</h5>
          <div className="card-text">
            <div className="row text-secondary">
              <div className="col-7"> Remaining quantity : </div>
              <div className="col-5">4</div>
            </div>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-around">
          <h3>1.2$</h3>
          <button className="btn btn-primary " id="btn-primary">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
