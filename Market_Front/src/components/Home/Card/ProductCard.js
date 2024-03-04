import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button, Card, Modal, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { deleteProduct } from '../../../redux/actions/ProductAction';
 const ProductCard = ({ item, loading }) => {
     const data = useSelector((state) => state.authReducer.authData);
   const [isAdmin, setIsAdmin] = useState(false);
    const [showModal, setShowModal] = useState(false);
       const dispatch = useDispatch();

    const handleDeleteClick = () => {
            setShowModal(true);
    };

    const handleConfirmDelete = () => {
  
      dispatch(deleteProduct(item.id));
      setShowModal(false);
    };

    const handleCancelDelete = () => {
      setShowModal(false);
    };
   useEffect(() => {
     setIsAdmin(data?.user?.authorities[0]?.roleId === 1);
   }, [isAdmin, data]);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      {loading ? (
        <Card style={{ width: "22rem" }}>
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
            src={"Images/" + item.imageUrl}
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
            {isAdmin ? (
              <Link to={`./edit-product/${item.id}`}>
                <button className="btn btn-primary " id="btn-primary">
                  Edit
                </button>
              </Link>
            ) : (
              <Link to={data?.user ? "./" : "./login"}>
                <button className="btn btn-primary " id="btn-primary">
                  Order
                </button>
              </Link>
            )}
            {isAdmin ? (
              <FaTrash
                style={{ color: "black", cursor: "pointer" }}
                onClick={handleDeleteClick}
              />
            ) : (
              ""
            )}
            <Modal show={showModal} onHide={handleCancelDelete}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCancelDelete}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
