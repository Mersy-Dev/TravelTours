import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../Assets/Images/weather.png';
import guideImg from '../Assets/Images/guide.png';
import customizationImg from '../Assets/Images/customization.png';

const ServiceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, temporibus? "
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, temporibus? "
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, temporibus? "
    },
]


const ServiceList = () => {
  return(
  <>
  {
    ServiceData.map((item, index) =>
     <Col lg='3' md='6' sm='12' className='mb-4' key={index}> 
        <ServiceCard item={item}/>
    </Col>)
  }
  
  </>

  )
  
}

export default ServiceList