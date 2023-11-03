import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footers_sections'>
      <Container>
        <Row>
       <div className='footer mt-5'>
        <Row className='mt-5'>  
                <Col md={6} lg={3} className='mt-0'>
                    <h6 className='text-white'>Company Name</h6>
                    <p>MD Bootstrap</p>
                    <p>MD WordPress</p>
                    <p>Angular</p>
                    <p>React js</p>
                </Col>
                <Col md={6} lg={3} className='mt-0'>
                    <h6 className='text-white'>Products</h6>
                    <p>MD Bootstrap</p>
                    <p>MD WordPress</p>
                    <p>Angular</p>
                    <p>React js</p>
                </Col>
                <Col md={6} lg={3} className='mt-0'>
                    <h6 className='text-white'>Use Full Links</h6>
                    <p>MD Bootstrap</p>
                    <p>MD WordPress</p>
                    <p>Angular</p>
                    <p>React js</p>
                </Col>
                <Col md={6} lg={3} className='mt-3'>
                    <h6 className='text-white'>Contacts</h6>
                    <p>MD Bootstrap</p>
                    <p>MD WordPress</p>
                    <p>Angular</p>
                    <p>React js</p>
                </Col>
                </Row>
        </div>
        <hr></hr>
        <p className='text-center text-white'>@2023 CopyRight Used Links</p>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
