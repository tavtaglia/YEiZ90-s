import React, {useRef} from "react";
import logo from "../components/yeiz.png"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
      
        // Get the email and password values from the input fields
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      
        // Perform some validation on the email and password values
        if (!email || !password) {
          alert("Please enter both an email and password.");
          return;
        }
        if (email === "adminkalil@gmail.com" && password === "adminkalil") {
            // Login successful, navigate to dashboard admin page
            navigate("/dashboard", { replace: true });
          } else {
            alert("Invalid email or password.");
          }
        };
  return (
    <>
      <div className="gray-list"></div>
      <div className="navbar navbar-expand-lg bg-white shadow p-3 mb-5">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-12 text-center">
            <img src={logo} alt="logo"/>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <div className="text1">L O G I N</div>
          <div className="text2">Please enter your e-mail and password:</div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="email" name="email" placeholder="Email" ref={emailRef}/>
          </div>
          <div className="input">
            <input type="password" name="password" placeholder="Password" ref={passwordRef}/>
          </div>
        </div>
        <div className="submit-container">
        <form onSubmit={(event) => handleLogin(event)}>
            <button type="submit" className="submit">L O G I N</button>
          </form>        
        </div>
      </div>
    </>
  );
};

export default Login;
