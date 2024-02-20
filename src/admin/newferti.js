import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import './newpest.css'
import {Link} from 'react-router-dom'
export default function Addferti(){
    return( 
        <div >
            <form className='newfer'>
              <div className="text-center">
             <h4 className='headpest'>Adding new Fertilizer:</h4>
             </div>
             <br />
             <div className='container'>
             <Form.Label id="vegetable"><h5>Select vegetable</h5></Form.Label>
             <Form.Select >
             <option>Tomato</option>
             <option>Onion</option>
             <option>Brinjal</option>
             <option>Ladys finger</option>
             <option>Potato</option>
             <option>Cabbage</option>
             </Form.Select>
             <br />
             <div class="form-group mt-2">
               <label id="disease_image"><h5>Upload Fertilizers Image</h5></label><br/>
               <input type="file" class="form-control-file mt-2" />
             </div>

             <br/>
             <Link to="/ferti">
             <div class="text-center">
               <button type="button" class="btn btn-primary">Submit</button>
             </div>
             </Link> 
             </div>     
           </form>
           </div>
    )
}