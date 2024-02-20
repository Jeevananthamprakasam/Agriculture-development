import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import React,{useState} from 'react';
import { Link, NavLink } from "react-router-dom";

const NavigationBar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='fw-bold'>
          <Link to="/" className="title">
            AgroBee
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          </div>
          <ul className={menuOpen ? "open" : ""}>
          <li>
              <NavLink to="myfarm">My farm</NavLink>
            </li>
            <li>
              <NavLink to="pesticide">Pesticides</NavLink>
            </li>
            <li>
              <NavLink to="fertilizer">Fertilizer</NavLink>
            </li>
            <li>
              <NavLink to="Office">Agri Office</NavLink>
            </li>
            <li>
              <NavLink to="sugges">Suggessions</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      );
}
export default NavigationBar