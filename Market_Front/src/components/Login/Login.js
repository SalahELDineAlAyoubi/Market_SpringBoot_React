import React, { useEffect, useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/actions/AuthAction';
import { useLocalStorage } from 'react-use-storage';

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

  const loading = useSelector((state) => state.authReducer.loading);
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);
  const authData = useSelector((state) => state.authReducer.authData);
const [islogin, setislogin, removeislogin] = useLocalStorage("islogin", false);
const [isAdmin, setisAdmin, removeisAdmin] = useLocalStorage("isAdmin", false);

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [resData, setResData] = useState(authData);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {

   setError("");
  }, []);

 useEffect(() => {
   return () => {
     dispatch({ type: "CLEAR_ERROR_MESSAGE" });  
   };
 }, [dispatch]); 

 useEffect(() => {
   setError(errorMessage);
 }, [errorMessage]);

const  goToregister =()=>{
     document.getElementById("container").classList.add("active");
 }

const goTologin = () => {
     document.getElementById("container").classList.remove("active");
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!data.username || !data.password) {
    setError("All fields are required");
  } else {
     setError("");

    dispatch(logIn(data));
    console.log(resData);
    if (resData!= null){
      if (resData.user == null) {
        setError("Invalid Info");
      } else {
        setError("");

        setislogin(true);
        var role = resData.user.authorities[0].roleId;
        if (role == 1) {
          setisAdmin(true);
        }
        console.log();
        //navigate("/");
      }
    }

    //console.log(errorMessage);
    // setError(errorMessage);
  }
};
  return (
    <div className="loginBody">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form>
            <h1 className="h1Login">Create Account</h1>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1 className="h1Login">Sign In</h1>

            <input
              type="text"
              placeholder="username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            
            <button type="submit">{loading ? "Loading..." : "Log In"}</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className="h1Login">Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button onClick={goTologin} className="hidden" id="login">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="h1Login">Hello, User!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button onClick={goToregister} className="hidden" id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
