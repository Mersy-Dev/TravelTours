import React, { useEffect, useRef, useState, useContext } from 'react';
import '../Styles/tourdetails.css';
import { Container, Row, Col, Form, ListGroup } from "reactstrap"
import { useParams } from 'react-router-dom';
// import tourData from '../Assets/Data/tours';
import { BsFillStarFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5'
import { GrLocation } from 'react-icons/gr';
import { BiDollarCircle, BiLocationPlus } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import calculateAvgRating from '../Utilities/avgRating';
import avatar from './../Assets/Images/avatar.jpg';
import Booking from '../Components/Booking/Booking'
import Newsletter from '../Shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../Utilities/conFig';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  //fetch data from the database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  // const tour = tourData.find(tour => tour.id === id);

  //destructure properties from tour object
  const { photo, title, address, desc, price, reviews, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date 
  const options = { day: 'numeric', month: 'long', year: 'numeric' };


  //submit request to the server 
  const submitHandler = async e => {
    e.preventDefault()

    const reviewText = reviewMsgRef.current.value;
    // alert(`${reviewText}, ${tourRating}`);

    //CALLING API LATER
    try {
      if (!user || user === undefined || user === null) {
        alert('Please login to submit a review');
      }
        const reviewObj = {
          username: user?.username,
          reviewText,
          rating : tourRating
        }


        const res = await fetch(`${BASE_URL}/reviews/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(reviewObj)
        })
        const result = await res.json();
        if(!res.ok) {
          return alert(result.message);
        }
        alert(result.message);
    } catch (error) {
      alert(error.message)

    }

  }

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [tour]);

    return (
      <>
        <section>
          <Container>
            {
              loading && <h4 className=' text-center pt-5'>Loading...</h4>
            }
            {
              error && <h4 className=' text-center pt-5'>{error}</h4>
            }
            {
              !loading && !error &&
              (<Row>
                <Col lg='8'>
                  <div className="tour__content">
                    <img src={photo} alt="" />

                    <div className="tour__info">
                      <h2>{title}</h2>
                      <div className="d-flex align-items-center gap-5">
                        <span className='tour__rating d-flex align-items-center gap-1'>
                          <BsFillStarFill className='hi' />{avgRating === 0 ? null : avgRating}
                          {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                        </span>
                        <span>
                          <IoLocation className='ti' />{address}
                        </span>
                      </div>
                      <div className="tour__extra-details">
                        <span><GrLocation className='ti' />{city}</span>
                        <span><BiDollarCircle className='ti' />${price} /per person</span>
                        <span><BiLocationPlus className='ti' />${distance} k/m</span>
                        <span><BsPeopleFill className='ti' />{maxGroupSize} people</span>
                      </div>

                      <h5>Description</h5>
                      <p>{desc}</p>
                    </div>

                    {/* tour reviews */}
                    <div className="tour__reviews mt-4">
                      <h4>Reviews ({reviews?.length} reviews)</h4>

                      <Form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                          <span onClick={() => setTourRating(1)}>1 <BsFillStarFill /></span>
                          <span onClick={() => setTourRating(2)}>2 <BsFillStarFill /></span>
                          <span onClick={() => setTourRating(3)}>3 <BsFillStarFill /></span>
                          <span onClick={() => setTourRating(4)}>4 <BsFillStarFill /></span>
                          <span onClick={() => setTourRating(5)}>5 <BsFillStarFill /></span>
                        </div>

                        <div className="review__input">
                          <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required name="" id="" />
                          <button className="btn primary__btn text-white" type='submit'>Submit</button>
                        </div>
                      </Form>

                      <ListGroup className='user__reviews'>
                        {
                          reviews?.map(review => (
                            <div className="review__item">
                              <img src={avatar} alt="" />

                              <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div>
                                    <h5>{review.username}</h5>
                                    <p>{new Date('10-14-2023').toLocaleDateString("en-US", options)}</p>
                                  </div>
                                  <span className='d-flex align-items-center'>
                                    {reviews.rating}  <BsFillStarFill className='ri' />
                                  </span>
                                </div>
                                <h6>{review.reviewText}</h6>
                              </div>
                            </div>
                          ))
                        }
                      </ListGroup>
                    </div>
                    {/* tour reviws end */}
                  </div>
                </Col>

                <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating} />

                </Col>
              </Row>
              )
            }
          </Container>
        </section>

        <Newsletter />
      </>
    )
  }

export default TourDetails  