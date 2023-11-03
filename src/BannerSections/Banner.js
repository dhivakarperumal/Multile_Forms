import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner_images'>
      <Container fluid >
        <Row>
            <Col lg={12} md={12}>
                <div className='text-center banner_Sercitons_Contents' >
                    <h1 className='text-white paras'>Results. Online Information. </h1>
                    <p className='text-white paras'>Search Now. Internet Information. Find Answers. Popular Searches. A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.
                     Almost every piece of writing you do that is longer Vehicles.</p>
                
                    <div className='BtnSections'>
                        <Link to="/register"><button className='btns'>Sign In Now</button></Link>
                        <button className='btns12'>Read more Now</button>
                    </div>
                </div>
                
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
