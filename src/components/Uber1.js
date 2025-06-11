import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Uber1 = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id="a1">
      <Container>
        <Navbar.Brand href="#home" id="a2">Uber</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" id="a2">Ride</Nav.Link>
            <Nav.Link href="#pricing" id="a2">Business</Nav.Link>
            <Nav.Link href="#pricing"  id="a2">Drive</Nav.Link>
            <NavDropdown title="About" id="a2">
              <NavDropdown.Item href="#action/3.1">Aboutus</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">  Our offerings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">How uber works</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sustainability</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Explore</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">News room</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">Investor relation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">Autonomous</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.9">Blog</NavDropdown.Item>
              <NavDropdown.Divider />

              {/* <NavDropdown.Item href="#action/3.4"> */}
                 {/* Separated link  */}
              {/* </NavDropdown.Item> */}
            </NavDropdown> 
          </Nav>
          
          <Nav>
            <Nav.Link href="#deets" id="a2">EN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" id="a2">
              Help
              
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes" id="a2">
              Log in
              
            </Nav.Link>
            <Button variant="light">Signup</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Uber1