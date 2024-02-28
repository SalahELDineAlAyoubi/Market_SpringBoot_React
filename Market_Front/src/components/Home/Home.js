import jquery from 'jquery';
import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";

import './Home.css'
import ProductCard from "./Card/ProductCard";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllByCategory } from '../../redux/actions/ProductAction';
const Home = () => {
       const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productReducer);


 useEffect(() => {
   dispatch(getAllByCategory(1));
 }, []);
 




  return (
    <div className="homeBody">
      <header className="masthead">
        <div className="container">
          <div className="intro-text"></div>
        </div>
      </header>

      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className=" col-md-1"></div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="btn-group dropright">
              <button
                type="button"
                id="categoryButton"
                className="btn btn-warning  btn-lg dropdown-toggle text-light"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item dropItem">Chapter 1</Link>
                <Link className="dropdown-item dropItem">Chapter 2</Link>
                <Link className="dropdown-item dropItem">Chapter 3</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" id="searchBody">
            <div className="input-group input-group-lg mb-5">
              <input
                type="text"
                id="formControlSearch"
                className="form-control shadow-none"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="append"
              />
              <div className="input-group-append">
                <div className="btn btn-info" id="btnsearch">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row row-cols-1 row-cols-md-3 g-4  ">
          {products.map((item) => (
            <ProductCard key={item.id} loading={loading} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home
