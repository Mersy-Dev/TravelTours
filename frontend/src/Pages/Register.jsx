import React, {useState, useContext} from 'react';
import { Container, Row, Col, Form, FormGroup, ListGroup } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

import registerImg from '../Assets/Images/register.png';
import userIcon from '../Assets/Images/user.png';
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from '../Utilities/conFig';



const Register = () => {  


  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined 

  });
  
  const {dispatch } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleChange = async e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    try{
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const result = await res.json();
      if(!res.ok){
        alert(result.message);
      }
      else{
        dispatch({type: 'REGISTER_SUCCESS', payload: result.data});
        alert('Registered Successfully');
      }
      navigate('/login');

    }catch(error){
      alert(error.message);
    }
  }



  return (
    <section>
      <Container>
        <Row>
          <Col className="m-auto" lg='8'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <button className="btn secondary__btn auth__btn" type='submit'>Create Account</button>
                  <FormGroup>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
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

export default Register