import User from './user.js'
// import Admin from './admin.js'
//import Login from './components/login.js'
//import Addveg from './admin/newveg.js'
import Uhome from './components/uhome.js'
import Home from './components/home.js'
import Login from './components/login.js'
import Fertilizer from './components/fertilizer.js'
import Myfarm from './components/myfarm.js'
import Pesticide from './components/pesticide.js'
import Office from './components/office.js'
import Sugges from './components/sugges.js'
import Add from './components/addnew.js'
import Contact from './components/contact.js'

import AdminFerti from './admin/adminferti.js'
import AdminPest from './admin/adminpesti.js'
import UserInfo from './admin/adminuinfo.js'
import AdminVeg from './admin/adminvegetable.js'
import Addpest from './admin/newpest.js'
import Addferti from './admin/newferti.js'
import Addveg from './admin/newveg.js'
import Ahome from './admin/adminhome.js'
import AdminLogin from './admin/adminlogin.js'


import NavigationBar from './components/navbar.js'

import NavBar from './admin/adminnav.js'
import { Routes, Route } from "react-router-dom"
export default function App(){

  return(
    <div>
        <Routes>
        <Route path="/navbar" element={ <NavigationBar/> } />
        <Route path="/adminnavbar" element={ <NavBar/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/fertilizer" element={ <Fertilizer/> } />
        <Route path="/uhome" element={ <Uhome/> } />
        <Route path="/myfarm" element={ <Myfarm/> } /> 
        <Route path="/pesticide" element={ <Pesticide/> } />
        <Route path="/office" element={ <Office/> } />
        <Route path="/sugges" element={ <Sugges/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/add" element={ <Add/> } />

        <Route path="/uinfo" element={ <UserInfo/> } />
        <Route path="/veg" element={ <AdminVeg/> } />
        <Route path="/pest" element={ <AdminPest/> } />
        <Route path="/ferti" element={ <AdminFerti/> } />
        <Route path="/newpest" element={ <Addpest/> } />
        <Route path="/newferti" element={ <Addferti/> } />
        <Route path="/addveg" element={ <Addveg/> } />
        <Route path="/ahome" element={ <Ahome/> } />
        <Route path="/alogin" element={ <AdminLogin/> } />

      </Routes>
    </div>
  )

}