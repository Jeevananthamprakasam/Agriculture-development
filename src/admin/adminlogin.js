import {Link} from 'react-router-dom'
import './adminlogin.css'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
export default function AdminLogin() {
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
                
              </div>
              <div className="form-group mt-3">
                <label>Postal code</label>
                <input
                  id="postal_code"
                  className="form-control mt-1"
                  placeholder="Enter postal code"
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone number</label>
                <input
                  id="phone_no"
                  className="form-control mt-1"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="text-center">
                <Link to="/ahome">
                <button type="submit" className="btn btn-primary m-4" style={{backgroundColor:"rgb(58,99,82)"}}>
                 Admin Login
                </button>
                </Link>
              </div>
              
            </div>
          </form>
        </div>
      )
    }
  }