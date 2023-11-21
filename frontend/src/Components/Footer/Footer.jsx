import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import './footer.css';
import logo from '../../Assets/Images/logo.png';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsGithub, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { BiMap } from 'react-icons/bi';
import {  FiMail } from 'react-icons/fi';



const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: './about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: './login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]



const Footer = () => {
    const year = new Date().getFullYear()

  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, delectus?</p>

            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#'>
                  <AiOutlineYoutube />
                </Link>
              </span>

              <span>
                <Link to='#'>
                  <BsGithub />
                </Link>
              </span>

              <span>
                <Link to='#'>
                  <PiFacebookLogoBold />
                </Link>
              </span>

              <span>
                <Link to='#'>
                  <BsInstagram />
                </Link>
              </span>

            </div>
          </div>
        </Col>

        <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>

          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>

          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>

          <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <BiMap className='me-2 icon' />
                    Address:

                  </span>
                </h6>
                <p className='mb-0'>New york, States</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span className=''>
                    <FiMail  className='me-2 icon'/>
                    Email:

                  </span>
                </h6>
                <p className='mb-0'>mercydeveloper@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <BsFillTelephoneFill className='me-2 icon' />
                    Phone:

                  </span>
                </h6>
                <p className='mb-0'>+2348138862185</p>
              </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center pt-5'>
          <p className="copyright">Copywrite{year}, designed and develop by Mercy Dev. All rights reserved. </p>
        </Col>

      </Row>
    </Container>
  </footer>
}

export default Footer