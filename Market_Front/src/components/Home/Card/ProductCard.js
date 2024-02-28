import React from 'react'
import './ProductCard.css'
const ProductCard = ({ item, loading }) => {
  console.log(
    process.env.REACT_APP_PUBLIC_FOLDER +
      "068fd84d-21f6-469a-8c6e-048fbd836ed3.png"
  );
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-4 card1" id="card1">
        <img
          src={item.imageUrl}
          className="card-img-top"
          id="card-img-top"
          alt="..."
        />
        <div className="card-body " id="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className="card-text">
            <div className="row text-secondary">
              <div className="col-7"> Remaining quantity : </div>
              <div className="col-5">{item.quantity}</div>
            </div>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-around">
          <h3>{item.price}$</h3>
          <button className="btn btn-primary " id="btn-primary">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
