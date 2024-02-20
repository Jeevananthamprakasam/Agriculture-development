import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './adminnav.js'
import './adminvegetable.css'
const Data = [
  {  name: 'Onion', image:"/pimage/onion.jpg"},
  {  name: 'Tomato', image:"/pimage/tomato.jpg"},
  {  name: 'Potato', image:"/pimage/potato.jpg"},
  {  name: 'Ladys finger', image:"/pimage/ladysfinger.jpg"},
  {  name: 'Cabbage', image:"/pimage/cabbage.jpg"},
  {  name: 'Brinjal', image:"/pimage/brinjal.jpg"},
];

const AdminVeg = () => {
  return (
    <div>
      <NavBar/>
      <div className='vpage'>
        <h4 className='fheading'>Vegetables available</h4>
        <div className="d-flex flex-row ">   
        {Data.map((data) => (
          <div key={data.id} >
            <Card className="vcards">
             <Card.Img variant="top" src={data.image} className="vimages" />
              <Card.Body >
                <table>
                  <tr >
                    <td >{data.name}</td>
                  </tr> 
                </table>
              </Card.Body>
            </Card> 
          </div>
        ))}
       </div>
       <Link to='/addveg'>
       <div class="text-center">
          <button type="button" class="btn btn-primary">Add New Vegetable</button>
       </div>
       </Link>
       </div>
       </div>
  );
};
export default AdminVeg;
