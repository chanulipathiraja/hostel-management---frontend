import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdVisibilityOff } from "react-icons/md";

function Login ()  {
  return (
  
    <div className="login-container">
      <h1 className="logo">
        <span className="highlight">Hostelase</span>
      </h1>

      <div className="user-icon">
        <FaUser size={60} />
      </div>

      <div className="login-box">
        <div className="input-field">
          <FaUser className="icon" />
          <input type="text" placeholder="User name" />
        </div>

        <div className="input-field">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
          <MdVisibilityOff className="icon eye-icon" />
        </div>
      </div>

      <div className="button-row">
        <button className="btn signin">Sign in</button>
        <button className="btn signup">Sign up</button>
      </div>
    </div>
  );
};

export default Login;