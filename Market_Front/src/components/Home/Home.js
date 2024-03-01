import jquery from 'jquery';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

import './Home.css'
import ProductCard from "./Card/ProductCard";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllByCategory } from '../../redux/actions/ProductAction';
import { getAllCategories } from '../../redux/actions/CategoryAction';
import AllCards from './AllCards/AllCards';
const Home = () => {
       const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchTerm, setSearchTerm] = useState("");


 
   const { categories, loadingCat } = useSelector(
     (state) => state.categoryReducer
  );
 const [nameCategory, setNameCategory] = useState(categories[0].name);
    
useEffect(() => {
 dispatch(getAllCategories());
   
}, []);
  
 
 
// useEffect(() => {
//   dispatch(getAllCategories());
// }, []);
  

 



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
                {nameCategory}
              </button>

              <div className="dropdown-menu">
                {categories.map((item) => (
                  <Link
                    key={item.id}
                    className={`dropdown-item dropItem ${
                      item.id === selectedCategory ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(item.id);
                      setNameCategory(item.name);
                      console.log(selectedCategory);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
      <AllCards
        categoryId={selectedCategory}
        searchFilter={searchTerm}
      ></AllCards>
    </div>
  );
}

export default Home
