import React from 'react';
import './Login.css'
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
           <div className=''>
              <Col md={12} lg={12}>
                  <div className='logins'>
                    <h1>Login</h1>
                    <div className='login_form'>
                       <label><b>Email</b></label>
                       <input type='text' className='form-control' placeholder='Enter Email Address' />
                    </div>

                    <div className='login_form'><br></br>
                       <label><b>Password</b></label>
                       <input type='password' className='form-control' placeholder='Enter Email Address' />
                    </div>

                    <div className='login_form'>
                     
                      <button className='btns1234'>Login</button>
                    </div>
                    <p  className='mt-3'> Your Don't Have A Account Go to<Link to="/register">  Create a account New</Link></p>
                  </div>
              </Col>
           </div>
        </Row>
      </Container>
    </div>
  )
}

export default Login
