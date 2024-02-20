import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import './addnew.css'
import {Link} from 'react-router-dom'
export default function Add(){
    return(
            <div className='addnew'>
            <div className='adding'>
            <form className='form mt-4'>
             <h2>Adding new Vegetable</h2>
             <br />
             <div className='container'>
             <Form.Label>Select vegetable</Form.Label>
             <Form.Select >
             <option>Tomato</option>
             <option>Onion</option>
             <option>Brinjal</option>
             <option>Ladys finger</option>
             <option>Potato</option>
             <option>Cabbage</option>
             </Form.Select>
             <br />
             <Form.Group className="mb-3" >
                   <Form.Label>Land Quantity in Acer</Form.Label>
                   <Form.Control type="number" placeholder="ex: 2" />
             </Form.Group>
             <Form.Group className="mb-3" >
                   <Form.Label>Land Quantity in cent</Form.Label>
                   <Form.Control type="number" placeholder="ex: 35" />
             </Form.Group> 
             <Form.Group className="mb-3" >
                   <Form.Label>Planted Date</Form.Label>
                   <Form.Control type="date" placeholder="ex: 35" />
             </Form.Group> 
             <Form.Group className="mb-3" >
                   <Form.Label>End Date</Form.Label>
                   <Form.Control type="date" placeholder="ex: 35" />
             </Form.Group>
             <Link to="/myfarm">
             <button className='button '>Add</button>
             </Link> 
             </div>     
           </form>
        </div>
        </div>
    )
}