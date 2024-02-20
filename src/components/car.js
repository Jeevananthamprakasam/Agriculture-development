import React, {useState} from "react"; 
import {Row,Col} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import './car.css'
const data = [
  {
   image: require('./first.jpg'), 
   caption:"Make your farm profitable with us by using the suggession page.",
   description:""
  },
  {
    image:require('./ferti.jpg'), 
    caption:"Fertilizers",
    description:"You can able to see the both organic and chemical fertilizers and make use of them to get the good yield in your farm."
   },
   {
    image:require('./pest.jpg'), 
    caption:"Pesticides",
    description:"You can able to see the both organic and chemical pesticides and make your farm disease free to get good yield."
   },
]
const data1 = [
  {
   image: require('./c1.jpg'), 
  },
  {
   image:require('./c2.jpg'), 
  },
  {
    image: require('./c3.jpg'), 
   },
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Row className="hp">
      <Col >
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </Col>
    <Col lg={4}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data1.map((slide1, i) => {
        return (
          <Carousel.Item>  
                  
        <img 
          className="d-block w-100"
          src={slide1.image}
          alt="slider image"
          
        />
        
        <Carousel.Caption>
          <div class="col px-md-5">
          <Link to='/login'>
          <button type="submit" class="p-2 border bg-light btn">User login</button>
          </Link>
          <Link to='/alogin'>
          <button type="submit" class="p-2 border bg-light btn">Admin login</button>
          </Link>
          </div>
          <h3>{slide1.caption}</h3>
          <p>{slide1.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </Col>
    </Row>
    </div>
  );
}
export default HomeCarousel;