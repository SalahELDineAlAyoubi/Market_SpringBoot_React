import React, { useEffect, useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../redux/actions/AuthAction';
import { useLocalStorage } from 'react-use-storage';
import { getAllRegions } from '../../redux/actions/RegionAction';

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

  //const loading = useSelector((state) => state.authReducer.loading);
  const { errorMessage, loading ,authData} = useSelector((state) => state.authReducer);
  const { regions } = useSelector((state) => state.regionsReducer);

  const [islogin, setislogin, removeislogin] = useLocalStorage("islogin", false);

  const [error, setError] = useState("");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [dataSignUp, setDataSignUp] = useState({
    username: "",
    password: "",
    mobileNumber:"",
    region:"",
    rue: "",
   block:""
 
  });
  const [dataSignUpFinal, setDataSignUpFinal] = useState({
    username: "",
    password: "",
    mobileNumber: "",
  });
  const [resData, setResData] = useState(authData);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
       dispatch(getAllRegions());

   setDataSignUp((prevDataSignUp) => ({
     ...prevDataSignUp,
     region: document.getElementById("region").options[0].value,
   }));
   setError("");
  }, []);
useEffect(() => {
  if (
    dataSignUp.username !== "" &&
    dataSignUp.mobileNumber !== "" &&
    dataSignUp.password !== "" &&
    dataSignUp.region !== "" &&
    dataSignUp.rue !== "" &&
    dataSignUp.block !== ""
  ) {
    setDataSignUpFinal({
      username: dataSignUp.username,
      password: dataSignUp.password,
      mobileNumber: dataSignUp.mobileNumber,
      address:
        dataSignUp.region +
        " ,Rue " +
        dataSignUp.rue +
        " ,Block " +
        dataSignUp.block,
    });
  }
 }, [dataSignUp]);
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

   setislogin(true);
   dispatch(logIn(data));
        setError("");

   if(resData?.user==null){
         setError("Invalid Info");

   }
   
  }
};
  const handleChangeSignUp = (e) => {
    setDataSignUp({ ...dataSignUp, [e.target.name]: e.target.value });
    

  };
   
const handleSubmitSignUp =  async (e) => {  
  e.preventDefault();
if (
  !dataSignUpFinal.username ||
  !dataSignUpFinal.password ||
  !dataSignUpFinal.mobileNumber ||
  !dataSignUpFinal.address
) {
  setErrorSignUp("All fields are required");
} else {
  setError("");
console.log(
  JSON.stringify({
    username: dataSignUpFinal.username,
    password: dataSignUpFinal.password,
  })
);
  setislogin(true);
   dispatch(signUp(dataSignUpFinal));
    // dispatch(logIn(JSON.stringify({ username: dataSignUpFinal.username, password: dataSignUpFinal.password })));

  if (resData?.user == null) {
    setError("Invalid Info");
  }
}

   
};
  return (
    <div className="loginBody">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSubmitSignUp}>
            <h1 className="h1Login">Sign Up</h1>

            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={dataSignUp.username}
              onChange={handleChangeSignUp}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={dataSignUp.mobileNumber}
              onChange={handleChangeSignUp}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={dataSignUp.password}
              onChange={handleChangeSignUp}
            />
            <div className="row">
              <div className="col-md-4 ">
                <select
                  name="region"
                  id="region"
                  value={dataSignUp.region}
                  onChange={handleChangeSignUp}
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 ">
                <input
                  type="number"
                  placeholder="Rue"
                  name="rue"
                  value={dataSignUp.rue}
                  onChange={handleChangeSignUp}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  placeholder="Block"
                  name="block"
                  value={dataSignUp.block}
                  onChange={handleChangeSignUp}
                />
              </div>
            </div>
            <button type="submit">Sign Up</button>
            {errorSignUp && <p style={{ color: "red" }}>{errorSignUp}</p>}
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1 className="h1Login">Log In</h1>

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
                Log In
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
