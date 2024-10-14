import React, { useState } from "react";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  function Validation(values) {
    const errors = {};
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
      errors.name = "Name is required";
    }
    if (values.email === "") {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (values.password === "") {
      errors.password = "Password is required";
    } 

    return errors;
  }
  function handleInput(e) {
    const newObj = { ...values, [e.target.name]: e.target.value };
    console.log(values.name);
    setValues(newObj);
  }

  function handleValidation(e) {
    e.preventDefault();
    setError(Validation(values));
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input-elements">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleInput}
            />
            
          </div>
          <div className="error">
          {error.name && (
              <p
                style={{
                  color: "red",
                }}
              >
                {error.name}
              </p>
            )}
          </div>
          </div>
        )}
        <div className="input-elements">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
          </div>
          <div className="error">
          {error.email && (
            <p
              style={{
                color: "red",
              }}
            >
              {error.email}
            </p>
          )}
          </div>
          
        </div>

        <div className="input-elements">
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInput}
          />
        </div>
        <div className="error">
        {error.password && (
            <p
              style={{
                color: "red",
              }}
            >
              {error.password}
            </p>
          )}
        </div>
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password? <span>click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={(e) => {
            setAction("Sign Up");
            handleValidation(e);
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={(e) => {
            setAction("Login");
            handleValidation(e);
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
