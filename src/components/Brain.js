import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f1 from '../images/brain.webp'


const Brain = () => {
  return (
    <div>
        <Row>
          <Col lg={1} md={12}></Col> 
          <Col lg={4} md={12}>
          <img src={f1} class="j2"></img>

          </Col> 
          <Col lg={2}></Col>   
          <Col lg={4} md={12}>
          <div class="d6">
          <h1 class="d7">Ride with friends<br></br> seamlessly</h1><br></br>
          <h1 class="d8">Ride with friends seamlessly</h1>
          <p>Riding with friends just got easier: set up a group ride in the <br></br>Uber app, invite your friends, and arrive at your destination. <br></br>Friends who ride together save together.</p><br></br>
          <button>Learn more</button>
          </div>
          </Col> 
          <Col lg={1} md={12}></Col>
           </Row>
    </div>
  )
}

export default Brain