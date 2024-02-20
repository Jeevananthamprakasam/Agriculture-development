import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Col,Row} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './adminnav.js'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

import './adminpest.css'
const Data = [
  {  name: 'Tomato',disease:"Tomato Catface", image:"/pimage/td1.jpeg",organic:"The disease can only be treated by preventive measures.",chemical:"Always consider an integrated approach with preventive measures and biological treatments if available. This disease can only be treated by preventive measures that are easy to implement. However, avoid the use of herbicides that can trigger the condition in particularly susceptible varieties."},
  {  name: 'Tomato',disease:"Stem rot", image:"/pimage/td2.jpeg",organic:"Preventive measures are the best option to avoid the disease or reduce its incidence. Some strains of the fungi Trichoderma harzianum give a good control of D. lycopersici and results in yield increases.",chemical:"Always consider an integrated approach with preventive measures and biological treatments if available. Preventive measures are the best option to avoid the disease or reduce its incidence. Fungicide treatments can be effective if applied in a timely manner. Products based on chlorotalonil can be useful to prevent new infections."},
  {  name: 'Onion',disease:"Bacterial spot", image:"/pimage/td3.jpeg",organic:"Bacterial viruses (bacteriophages) that specifically kill the bacteria are available for the bacterial spot. Submerging seeds for one minute in sodium hypochlorite or in hot water (50°C) for 25 minutes can reduce the incidence of both diseases.",chemical:"For homeowners, copper products or copper plus mancozeb are registered and effective to control bacterial spot of tomato. For commercial growers, control of bacterial spot on greenhouse transplants by using streptomycin can prevent spread of the disease in the field."},
  {  name: 'Onion',disease:"white rot", image:"/pimage/od1.jpeg",organic:"The most effective way to avoid introducing the white rot pathogen is to plant only clean stock from known origins that have no history of white rot. Onion seed is not likely to carry sclerotia since the pathogen is not seedborne in onion, but infected transplants and sets can carry sclerotia.",chemical:"If white rot has been a recent problem in the field, apply a fungicide in a 6-inch band over the planting trench immediately before planting. This will provide effective control of white rot."},
  {  name: 'Onion',disease:"purple blotch", image:"/pimage/od2.png",organic:"To date, no effective biological control for this disease is available. The antagonistic fungus Cladosporium herbarum has been used to inhibit the pathogen Alternaria porri on contact in vivo, reducing the infection by 66.6%. Other fungi were much less effective, for example Penicillium sp. (54%).",chemical:"If chemical control is necessary, use: Protectant products: copper (e.g., cuprous oxide), mancozeb, chlorothalonil. Of the three, mancozeb and chlorothalonil are commonly used in countries experiencing outbreaks of purple blotch."},
  {  name: 'Onion',disease:"Iris Yellow Spot Virus", image:"/pimage/od3.jpg",organic:"Avoid excessive application of nitrogen fertilizer. Practice good sanitation. Remove and destroy infected plants along with cull piles. Eliminate weeds in and around onion fields, especially volunteer onions and wild Allium species.",chemical:"Disease severity is related to the presence of ONION THRIPS infected with the virus. Controlling onion thrips will reduce incidence of this disease; particularly spread within the field."},
];

const AdminPest = () => {
  return (
    <div>
      <NavBar/>
      <div class="pest">
        <Container className='cont'>
        {Data.map((data) => (
          <div key={data.id} className="shoe-card">
            <h4 className='heading'>{data.disease} of {data.name} :</h4>
            <img className='pestimg' src={data.image}></img>
            <div className='borders'>
            <h5><ScienceOutlinedIcon/>Chemical control:</h5>
            <p>{data.chemical}</p>
            <h5><SpaOutlinedIcon/>Organic control:</h5>
            <p>{data.organic}</p>
            </div>
          </div>
        ))}
       </Container>
       <Link to='/newpest'>
       <div class="text-center">
          <button type="button" class="btn btn-primary">Add New Pest</button>
       </div>
       </Link>
       </div>
       </div>
  );
};
export default AdminPest;