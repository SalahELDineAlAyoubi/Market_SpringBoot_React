import React, { useEffect } from 'react'
import "./Login.css";
import jquery from 'jquery';

const Login = () => {
  useEffect(() => {


  }, []);
 
const  goToregister =()=>{
     document.getElementById("container").classList.add("active");
 }

const goTologin = () => {
     document.getElementById("container").classList.remove("active");
};

  return (
    <div className="loginBody">
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Create Account</h1>
             
             <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            
             <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="">Forgot your email or password?</a>
            <button>Sign in</button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button  onClick={goTologin} class="hidden" id="login">
                Sign In
              </button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>Hello, User!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button onClick={goToregister} class="hidden" id="register">
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
