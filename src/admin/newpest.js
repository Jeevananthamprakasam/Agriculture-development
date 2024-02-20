import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import './newpest.css'
import {Link} from 'react-router-dom'
export default function Addpest(){
    return( 
        <div >
            <form >
             <div className="text-center">
             <h4 className='headpest'>Adding new Pesticide:</h4>
             </div>
             <br />
             <div className='container'>
             <Form.Label><h5>Select vegetable</h5></Form.Label>
             <Form.Select id="vegetable">
             <option>Tomato</option>
             <option>Onion</option>
             <option>Brinjal</option>
             <option>Ladys finger</option>
             <option>Potato</option>
             <option>Cabbage</option>
             </Form.Select>
             <br />
             <Form.Group className="mb-3" >
                    <Form.Label><h5>Disease Name</h5></Form.Label>
                    <Form.Control id="disease" type="text" placeholder="Enter the disease name" />
             </Form.Group>
             <div className="form-group">
               <label ><h5>Chemical control</h5></label>
                 <textarea
                    className="form-control"
                    placeholder='Enter the Chemical control methods here'
                    id="chemical_control"
                    rows="4"
                />
                <label><h5>Organic control</h5></label>
                 <textarea
                    className="form-control"
                    placeholder='Enter the Organic control methods here'
                    id="organic_control"
                    rows="4"
                />
             </div> 

             <div class="form-group mt-2">
               <label><h5>Upload Disease Image</h5></label><br/>
               <input type="file" class="form-control-file mt-2" />
             </div>

             <br/>
             <Link to="/pest">
             <div class="text-center">
               <button type="button" class="btn btn-primary">Submit</button>
             </div>
             </Link> 
             </div>     
           </form>
           </div>
    )
}


// import Form from 'react-bootstrap/Form';
// import "bootstrap/dist/css/bootstrap.min.css"
// import './newpest.css'
// import {Link} from 'react-router-dom'
// export default function Addpest(){
//     return(
//             <div className='addnew'>
//             <div className='adding'>
//             <form className='form mt-4'>
//              <h2>Adding new Vegetable</h2>
//              <br />
//              <div className='container'>
//              <Form.Label>Select vegetable</Form.Label>
//              <Form.Select >
//              <option>Tomato</option>
//              <option>Onion</option>
//              <option>Brinjal</option>
//              <option>Ladys finger</option>
//              <option>Potato</option>
//              <option>Cabbage</option>
//              </Form.Select>
//              <br />
//              <Form.Group className="mb-3" >
//                    <Form.Label>Land Quantity in Acer</Form.Label>
//                    <Form.Control type="number" placeholder="ex: 2" />
//              </Form.Group>
//              <Form.Group className="mb-3" >
//                    <Form.Label>Land Quantity in cent</Form.Label>
//                    <Form.Control type="number" placeholder="ex: 35" />
//              </Form.Group> 
//              <Form.Group className="mb-3" >
//                    <Form.Label>Planted Date</Form.Label>
//                    <Form.Control type="date" placeholder="ex: 35" />
//              </Form.Group> 
//              <Form.Group className="mb-3" >
//                    <Form.Label>End Date</Form.Label>
//                    <Form.Control type="date" placeholder="ex: 35" />
//              </Form.Group>
//              <Link to="/myfarm">
//              <button className='button'>Add</button>
//              </Link> 
//              </div>     
//            </form>
//         </div>
//         </div>
//     )
// }