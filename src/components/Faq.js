import React from 'react'

import Accordion from 'react-bootstrap/Accordion';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';


const Faq = () => {
  return (
    <div>
        <h1 class="lp"> Frequently asked questions</h1>
        <h1 class="lp1"> Frequently asked questions</h1>
         <Row> 
            <Col lg={2} md={12}></Col>
            <Col lg={8} md={12}>
            <div class="acc">
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Can I have a lost item delivered to me?</Accordion.Header>
        <Accordion.Body>
        The Uber app helps provide a delivery solution that can save you a trip across town, whether it’s for a last-minute birthday gift or your forgotten keys.<br></br> Just choose Package in the Uber app.
       <br></br><br></br><button class="kj">Get Details</button> </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I rent a car using Uber?</Accordion.Header>
        <Accordion.Body>
        Yes. <a href="" class="nh">Find out more</a> about how car rentals work.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I request a ride that picks up friends in different locations?</Accordion.Header>
        <Accordion.Body>
        Yes. Set up a group ride in the Uber app, invite your friends, and arrive at your destination together.
       <br></br><br></br><button class="kj">Learn More</button> </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I request a taxi on Uber?</Accordion.Header>
        <Accordion.Body>
       
Uber makes it easy to get a taxi nearby in the cities where Uber Taxi is available. There’s no need to find a cab stand, hail a cab on the street, or even call<br></br> the local cab company. Instead, you can use the Uber app or website to request a taxi in just a few taps or clicks.
       <br></br><br></br><button class="kj">Learning about request a taxi</button> </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is there an Uber ride option for 5 people?</Accordion.Header>
        <Accordion.Body>
        Request UberXL for a van or SUV that fits up to 6 people at an affordable price. It’s perfect for a family trip or a ride to the airport.
       <br></br><br></br><button class="kj">Get details about UberXl</button> </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
    </Col>
    <Col lg={2} md={12}></Col>
      </Row>   
  </div>
  )
}

export default Faq