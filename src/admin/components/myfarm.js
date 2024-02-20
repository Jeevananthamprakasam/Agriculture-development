import React from 'react';
import Card from 'react-bootstrap/Card';
import './myfarm.css';
import {Link} from 'react-router-dom'
const Myfarm = () => {
  return (
    <div className="Myfarm">
    <div className='naane'>
     <Card className="custom-card">
      <Card.Img variant="top" src="pimage/tomato.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
            <tr>
                <td>Vegetable Name:</td>
                <td>Tomato</td>
            </tr>
            <tr>
                <td>Planted Area:</td>
                <td>4.5 acer</td>
            </tr>
            <tr>
                <td>Planted date:</td>
                <td>01/12/2023</td>
            </tr>
            <tr>
                <td>End date:</td>
                <td>28/02/2024</td>
            </tr>
        </table>
        
      </Card.Body>
      <button className="custom-btn">Delete</button>
    </Card> 
    </div>
    <div className='naane'>
     <Card className="custom-card">
      <Card.Img variant="top" src="pimage/onion.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
            <tr>
                <td>Vegetable Name:</td>
                <td>onion</td>
            </tr>
            <tr>
                <td>Planted Area:</td>
                <td>2 acer</td>
            </tr>
            <tr>
                <td>Planted date:</td>
                <td>10/12/2023</td>
            </tr>
            <tr>
                <td>End date:</td>
                <td>10/03/2024</td>
            </tr>
        </table>
        
      </Card.Body>
      <button className="custom-btn">Delete</button>
    </Card> 
    </div>
    <Link to="/add">
    <button className='butt'>Add New </button>
    </Link>
    </div>
  );
};

export default Myfarm;