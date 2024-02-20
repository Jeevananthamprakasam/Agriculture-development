import './fertilizer.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from './navbar.js'
export default function Fertilizer(){
    return(
      <div>
        <NavigationBar/>
       <div className="fer">
         <div>
          <h4>Fertilizers for Tomato:</h4>
          <img src="pimage/tcf.png"></img>
          </div>
          <div>
            <h4>Fertilizers for onion:</h4>
            <img src="pimage/oferti.png"></img>
          </div>
       </div>
       </div>
    )
   }