import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, ListGroup } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

import loginImg from '../Assets/Images/login.png';
import userIcon from '../Assets/Images/user.png';
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from '../Utilities/conFig';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined

  })


  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }
      else {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        alert('Logged in Successfully');
        console.log(result.data);

      }
      navigate('/');

    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });

    }
  }



  return (
    <section>
      <Container>
        <Row>
          <Col className="m-auto" lg='8'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <button className="btn secondary__btn auth__btn" type='submit'>Login</button>
                  <FormGroup>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login