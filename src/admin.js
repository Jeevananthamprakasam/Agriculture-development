import AdminFerti from './admin/adminferti.js'
import AdminPest from './admin/adminpesti.js'
import NavigationBar from './admin/adminnav.js'
import UserInfo from './admin/adminuinfo.js'
import AdminVeg from './admin/adminvegetable.js'
import { Routes, Route } from "react-router-dom"
import Addpest from './admin/newpest.js'
import Addferti from './admin/newferti.js'
import Home from './admin/home.js'
import Addveg from './admin/newveg.js'
function Admin() {
  return (
    <div className="App">  
      <NavigationBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/uinfo" element={ <UserInfo/> } />
        <Route path="/veg" element={ <AdminVeg/> } />
        <Route path="/pest" element={ <AdminPest/> } />
        <Route path="/ferti" element={ <AdminFerti/> } />
        <Route path="/newpest" element={ <Addpest/> } />
        <Route path="/newferti" element={ <Addferti/> } />
        <Route path="/addveg" element={ <Addveg/> } />
      </Routes>
    </div>
  ); 
}

export default Admin;