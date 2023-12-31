import React from 'react'
import TourCard from '../../Shared/TourCard';
// import tourData from '../../Assets/Data/tours'; 
import { Col } from 'reactstrap';

import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../Utilities/conFig';


const FeaturedTourList = () => {
  const { data: featuredTours } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(featuredTours);
  return (
    <>
      
      {featuredTours?.map(tour => (
        <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))
      }
    </>
  )
}

export default FeaturedTourList