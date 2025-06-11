import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Ride = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="#home">Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto drive-menu">
            <Nav.Link href="https://auth.uber.com/v2/?breeze_init_req_id=f6282518-311f-433b-b599-ba9434246f1e&breeze_local_zone=phx50&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3Fmarketing_vistor_id%3Dbb8d9ae0-31ec-4cbe-97ab-92a69d85d758%26previousPath%3D%252Flooking%26uclick_id%3Df2d266f0-253e-4182-99b9-c9f4b8c0cf93&state=09Am3ubdgziFXro8oVcTwj4UgIAjGRwOJxl5A_mUWXQ%3D">Request a ride</Nav.Link>
            <Nav.Link href="https://auth.uber.com/v2/?breeze_init_req_id=f6282518-311f-433b-b599-ba9434246f1e&breeze_local_zone=phx50&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3Fmarketing_vistor_id%3Dbb8d9ae0-31ec-4cbe-97ab-92a69d85d758%26previousPath%3D%252Flooking%26uclick_id%3Df2d266f0-253e-4182-99b9-c9f4b8c0cf93&state=09Am3ubdgziFXro8oVcTwj4UgIAjGRwOJxl5A_mUWXQ%3D">Reseve a ride</Nav.Link>
            <Nav.Link href="https://auth.uber.com/v2/?breeze_init_req_id=f6282518-311f-433b-b599-ba9434246f1e&breeze_local_zone=phx50&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3Fmarketing_vistor_id%3Dbb8d9ae0-31ec-4cbe-97ab-92a69d85d758%26previousPath%3D%252Flooking%26uclick_id%3Df2d266f0-253e-4182-99b9-c9f4b8c0cf93&state=09Am3ubdgziFXro8oVcTwj4UgIAjGRwOJxl5A_mUWXQ%3D">See prices</Nav.Link>
            <Nav.Link href="#https://auth.uber.com/v2/?breeze_init_req_id=f6282518-311f-433b-b599-ba9434246f1e&breeze_local_zone=phx50&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3Fmarketing_vistor_id%3Dbb8d9ae0-31ec-4cbe-97ab-92a69d85d758%26previousPath%3D%252Flooking%26uclick_id%3Df2d266f0-253e-4182-99b9-c9f4b8c0cf93&state=09Am3ubdgziFXro8oVcTwj4UgIAjGRwOJxl5A_mUWXQ%3D">Explore ride options</Nav.Link>
            <Nav.Link href="#https://auth.uber.com/v2/?breeze_init_req_id=f6282518-311f-433b-b599-ba9434246f1e&breeze_local_zone=phx50&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3Fmarketing_vistor_id%3Dbb8d9ae0-31ec-4cbe-97ab-92a69d85d758%26previousPath%3D%252Flooking%26uclick_id%3Df2d266f0-253e-4182-99b9-c9f4b8c0cf93&state=09Am3ubdgziFXro8oVcTwj4UgIAjGRwOJxl5A_mUWXQ%3D">Airports rides</Nav.Link>
            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  )
}

export default Ride