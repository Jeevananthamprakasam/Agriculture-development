import React from 'react';
import Card from 'react-bootstrap/Card';
import './pesticide.css';
const Pesticide = () => {
    return(
    <div className="pbg">
    <div className='naane'>
     <Card className="custom-cards">
      <Card.Img variant="top" src="pimage/td1.jpeg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
            <tr>
                <td>Vegetable Name:</td>
                <td>Tomato</td>
            </tr>
            <tr>
                <td>Disease Name:</td>
                <td>Tomato Catface</td>
            </tr>
            <tr>
                <td>Organic Control:</td>
                <td>This can only controlled by preventive measures.</td>
            </tr>
            <tr>
                <td>Chemical Control:</td>
                <td>To avoid the use of herbicides that can trigger the condition in particularly susceptible varieties.</td>
            </tr>
        </table>
      </Card.Body>
    </Card> 
    </div>
    
    <div className='naane'>
     <Card className="custom-cards">
      <Card.Img variant="top" src="pimage/td2.jpeg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
        <tr>
                <td>Vegetable Name:</td>
                <td>Tomato</td>
            </tr>
            <tr>
                <td>Disease Name:</td>
                <td>Stem rotten</td>
            </tr>
            <tr>
                <td>Organic Control:</td>
                <td> Use reed canes (Arundo donax) or Eucalyptus stakes to support tomatoes as this reduces disease incidence.</td>
            </tr>
            <tr>
                <td>Chemical Control:</td>
                <td>Products based on chlorotalonil can be useful to prevent new infections.</td>
            </tr>
        </table>
        
      </Card.Body>
    </Card> 
    </div>
    <div className='naane'>
     <Card className="custom-cards">
      <Card.Img variant="top" src="pimage/td3.jpeg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
        <tr>
                <td>Vegetable Name:</td>
                <td>Tomato</td>
            </tr>
            <tr>
                <td>Disease Name:</td>
                <td>bacterial spot of tomato</td>
            </tr>
            <tr>
                <td>Organic Control:</td>
                <td>Submerging seeds for one minute in sodium hypochlorite or in hot water (50°C) for 25 minutes.</td>
            </tr>
            <tr>
                <td>Chemical Control:</td>
                <td>copper plus mancozeb is registered and effective to control bacterial spot of tomato.</td>
            </tr>
        </table>
        
      </Card.Body>
    </Card> 
    </div>
    <div className='naane'>
     <Card className="custom-cards">
      <Card.Img variant="top" src="pimage/od1.jpeg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
        <tr>
                <td>Vegetable Name:</td>
                <td>Onion</td>
            </tr>
            <tr>
                <td>Disease Name:</td>
                <td>white rot</td>
            </tr>
            <tr>
                <td>Organic Control:</td>
                <td>Seed dressing with Benomyl, Carbendazim or Thiophanate-methyl (100 to 150 g/kg seed) gives effective control.</td>
            </tr>
            <tr>
                <td>Chemical Control:</td>
                <td> apply a fungicide in a 6-inch band over the planting trench immediately before planting.</td>
            </tr>
        </table>
        
      </Card.Body>
    </Card> 
    </div>
    <div className='naane'>
     <Card className="custom-cards">
      <Card.Img variant="top" src="pimage/od2.png" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
        <tr>
                <td>Vegetable Name:</td>
                <td>onion</td>
            </tr>
            <tr>
                <td>Disease Name:</td>
                <td>purple blotch</td>
            </tr>
            <tr>
                <td>Organic Control:</td>
                <td>chlorothalonil, fenamidone and mancozeb (all @ 0.20 - 0.25%) can control this disease.</td>
            </tr>
            <tr>
                <td>Chemical Control:</td>
                <td>Use Protectant products: copper (e.g., cuprous oxide), mancozeb, chlorothalonil. </td>
            </tr>
        </table>
        
      </Card.Body>
    </Card> 
    </div>
    <div className='naane'>
     <Card className="custom-cards">
      <Card.Img variant="top" src="pimage/od3.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
        <table>
        <tr>
                <td>Vegetable Name:</td>
                <td>onion</td>
            </tr>
            <tr>
                <td>Disease Name:</td>
                <td>Iris Yellow Spot Virus</td>
            </tr>
            <tr>
                <td>Organic Control:</td>
                <td>Avoid excessive application of nitrogen fertilizer. Practice good sanitation.</td>
            </tr>
            <tr>
                <td>Chemical Control:</td>
                <td>Thrips control may provide some reduction in Iris yellow spot, but thrips control alone is not sufficient to economically control the disease.</td>
            </tr>
        </table>
        
      </Card.Body>
    </Card> 
    </div> 
    </div>
    )
}
export default Pesticide;