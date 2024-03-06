import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { useLocalStorage } from "react-use-storage";
import Users from "./components/Users/Users";
import { useEffect, useState } from "react";
import AddProduct from "./components/ProductManage/Add-Product/AddProduct";
import ProductForm from "./components/ProductManage/ProductForm";
import EditProduct from "./components/ProductManage/Edit-Product/EditProduct";
import Categories from "./components/Thymeleaf/categories";

function App() {
  const data = useSelector((state) => state.authReducer.authData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
 
    setIsAdmin(data?.user?.authorities[0]?.roleId === 1);
  }, [data]);
 
  return (
    <div className="App">
      <Navbar isAdmin={isAdmin} token={data?.jwt}/>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/login"
          element={data?.user ? <Navigate to="../" /> : <Login />}
        ></Route>

        <Route
          path="/users"
          element={
            data?.user && isAdmin ? (
              <Users user={data} />
            ) : (
              <Navigate to="../" />
            )
          }
        ></Route>

        <Route
          path="/add-product"
          element={
            data?.user && isAdmin ? <AddProduct /> : <Navigate to="../" />
          }
        ></Route>
        <Route
          path="/edit-product/:productId"
          element={
            data?.user && isAdmin ? <EditProduct /> : <Navigate to="../" />
          }
        ></Route>

        {/* <Route
          path="/categories"
          element={
            data?.user && isAdmin ? (
              <Categories />
            ) : (
              <Navigate to="../" />
            )
          }
        ></Route> */}
        <Route path="*" element={<Navigate to="../" />} />
      </Routes>
    </div>
  );
}

export default App;
