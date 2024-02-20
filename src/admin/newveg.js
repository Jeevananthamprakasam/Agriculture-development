import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import './newpest.css'
import {Link} from 'react-router-dom'
export default function Addveg(){
    return( 
        <div>
            <form className='newfer'>
              <div className='text-center'>
             <h4 className='headpest'>Adding new Vegetable:</h4>
             </div>
             <br />
             <div className='container'>
             <label><h5>Vegetable Name</h5></label>
                 <input
                    id="vegetable"
                    className="form-control"
                    placeholder='Enter the Vegetable name here'
                    rows="4"
                />
             <br />
             <div class="form-group mt-2">
               <label><h5>Upload Vegetable Image</h5></label><br/>
               <input id="vegetable_image" type="file" class="form-control-file mt-2" />
             </div>

             <br/>
             <Link to="/veg">
             <div class="text-center">
               <button type="button" class="btn btn-primary">Submit</button>
             </div>
             </Link> 
             </div>     
           </form>
           </div>
    )
}