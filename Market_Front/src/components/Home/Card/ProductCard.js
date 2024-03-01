import React from 'react'
import './ProductCard.css'
import { Card, Placeholder } from 'react-bootstrap';
const ProductCard = ({ item, loading }) => {
 
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      {loading ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"
          />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      ) : (
        <div className="card mb-4 card1" id="card1">
          <img
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
      )}
    </div>
  );
};

export default ProductCard;
