import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gh from '../images/blc.webp'

const Blc = () => {
  return (
    <div>
      <div class="o">
      
        <Row>
        <Col lg={2} md={12}></Col>

            <Col lg={4} md={12}>
            <div class="u">
            <h1> Go where you want. Get what you need.<br></br> All with Uber One.</h1>
            <p>One membership for member pricing and experiences on<br></br>rides, deliveries, and more.</p>
            <p>Sign up for just $9.99/month.</p>
            <button class="w">Learn more</button>
            </div>
            </Col>
            <Col lg={4} md={12}>
            <img src={gh} class="s1"></img>
            </Col>
            
            <Col lg={2} md={12}></Col>

        </Row>
    </div>
    </div>
  )
}

export default Blc