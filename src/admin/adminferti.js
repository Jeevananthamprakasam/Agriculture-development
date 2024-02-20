import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Col,Row} from 'react-bootstrap'
import NavBar from './adminnav.js'
import "bootstrap/dist/css/bootstrap.min.css"
import './adminferti.css'
const Ferti = [
  {  name: 'Tomato',image:"/pimage/tcf.png"},
  {  name: 'Onion',image:"/pimage/oferti.png"},
];

const AdminFerti = () => {
  return (
      <div class='bg-white'>
        <NavBar/>
        <div>
        {Ferti.map((data) => (
          <div key={data.id} className="shoe-card">
            <h5 className='fheading'>Fertilizers for {data.name} plant:</h5>
            <img src={data.image} className="ferti"></img>
          </div>
        ))}
       </div>
       <form className='f-form'>

       <Link to='/newferti'>
       <div class="text-center">
          <button type="button" class="btn btn-primary">Add New Fertilizer</button>
       </div>
       </Link>
       </form>
       </div>
  );
};
export default AdminFerti;