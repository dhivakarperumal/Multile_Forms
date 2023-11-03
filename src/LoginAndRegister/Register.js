import React from 'react';
import './Register.css';
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div>
      
    <Container>
      <Row>
         <div className=''>
            <Col md={12} lg={12}>
                <div className='registers'>
                  <h4 className='mt-4'>CREATE A NEW ACCOUNT</h4>
                  <div className='registers_form'>
                     <label><b>UserName</b></label>
                     <input type='text' className='form-control' placeholder='Enter Email Address' />
                  </div>

                  <div className='registers_form'><br></br>
                     <label><b>Email</b></label>
                     <input type='text' className='form-control' placeholder='Enter Email Address' />
                  </div>

                  {/* <div className='registers_form'><br></br>
                  <label><b>Gender</b></label>
                     <select className='registers_form form-control'>
                       <option>Male</option>
                       <option>FeMale</option>
                       <option>Others</option>
                     </select>
                  </div> */}

                  <div className='registers_form'><br></br>
                     <label><b>Password</b></label>
                     <input type='password' className='form-control' placeholder='Enter Email Address' />
                  </div>

                  <div className='registers_form'><br></br>
                     <label><b>ConformPassword</b></label>
                     <input type='password' className='form-control' placeholder='Enter Email Address' />
                  </div>

                  <div className='registers_form'>
                   
                    <button className='btns1234'>Register</button>
                  </div>

                  <p  className='mt-3'> Your Allready Have A Account Go to<Link to="/login">  Login Now</Link></p>
                </div>
            </Col>
         </div>
      </Row>
    </Container>
  </div>
  )
}

export default Register
