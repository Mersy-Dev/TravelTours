import React from 'react'
import '../Styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../Assets/Images/hero-img01.jpg';
import heroImg02 from '../Assets/Images/hero-img02.jpg';
import heroVideo from '../Assets/Images/hero-video.mp4';
import worldImg from '../Assets/Images/world.png';
import experienceImg from '../Assets/Images/experience.png';

import Subtitle from '../Shared/Subtitles'
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../Components/ImageGallery/MasonaryImagesGallery';
import Testimonials from '../Components/Testimonial/Testimonials';
import Newsletter from '../Shared/Newsletter';


const Home = () => {
  return (
    <>
      {/* hero  */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling Opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, tenetur magni fuga expedita aut, excepturi officiis alias rerum molestias beatae perspiciatis modi, sint eveniet consequatur dolore perferendis cupiditate a non.</p>
              </div>
            </Col>


            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero  */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>


      {/* Feature  */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title"> Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>

      </section>
      {/* Feature end */}
      {/* experience section */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2> With our all experience <br /> we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cupiditate illum facere rerum cum possimus doloribus iure?</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6> Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* experience section end*/}

      {/* gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our customer tour gallery</h2>
            </Col>

            <Col lg='12'>
              <MasonaryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery section end */}
      {/* testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fans say about us </h2>

            </Col>

            <Col lg='12'>
              <Testimonials /> 
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial end */}

      <Newsletter /> 


    </>
  )
}

export default Home