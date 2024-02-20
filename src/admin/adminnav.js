import 'bootstrap/dist/css/bootstrap.min.css'
import './adminnav.css'
import React,{useState} from 'react';
import { Link } from "react-router-dom";
const NavBar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      
        <nav className='fw-bold'>
          <Link to='/' className="title">
            AgroBee
          </Link>
          <Link  className="title">
            Admin Page
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          </div>
          <ul className={menuOpen ? "open" : ""}>
          <li>
              <Link to="/uinfo">user info</Link>
            </li>
            <li>
              <Link to="/veg">vegetables</Link>
            </li>
            <li>
              <Link to="/pest">Pesticides</Link>
            </li>
            <li>
              <Link to="/ferti">Fertilizers</Link>
            </li>
            <li>
              <Link to="/">logout</Link>
            </li>
          </ul>
        </nav>
      );
}
export default NavBar