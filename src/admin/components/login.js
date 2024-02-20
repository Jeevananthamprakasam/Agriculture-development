import {Link} from 'react-router-dom'
import './login.css'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
export default function Login() {
    let [authMode, setAuthMode] = useState("signin")
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")

    }
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <img className="img" src="agrobee.jpg" alt="logo"></img>
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Postal code</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter postal code"
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone number</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="gap-2 mt-3">
                <Link to="/">
                <button type="submit" className="btn btn-primary m-4" style={{backgroundColor:"rgb(58,99,82)"}}>
                  Submit
                </button>
                </Link>
                <Link to="">
                <button type="submit" className="btn btn-primary m-4" style={{backgroundColor:"rgb(58,99,82)"}}>
                  Admin
                </button>
                </Link>
              </div>
              
            </div>
          </form>
        </div>
      )
    }
   
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <img className="img" src="agrobee.jpg"></img>
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>District</label>
              <input
                type="id"
                className="form-control mt-1"
                placeholder="District"
              />
            </div>
            <div className="form-group mt-3">
              <label>Postal code</label>
              <input
                type="id"
                className="form-control mt-1"
                placeholder="Postal code"
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone number</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Phone number"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(58,99,82)"}}>
                Create account
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }