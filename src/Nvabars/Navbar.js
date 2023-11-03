import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Navbars = () => {
  return (
    
    <Container fluid >
        <div>
        <Row>
    <Navbar expand="lg" className="navbars" id="navbars123">
      <Container >
        <Navbar.Brand as={Link} to=" " className='logo'>Online Information.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">

            <Nav.Link as={Link} to="" className='menues' >Home</Nav.Link>
            <Nav.Link href="#action2" className='menues'>About</Nav.Link>
            <Nav.Link as={Link} to="/personaldetails" className='menues'>Personal Details</Nav.Link>
            <Nav.Link className='menues'>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/datas" className='menues'>Datas</Nav.Link>
            <Nav.Link as={Link} to="/login" className='menues'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Row>
        </div>
    </Container>
    
  )
}

export default Navbars
