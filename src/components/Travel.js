import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import v5 from '../images/travel1.webp';
import v6 from '../images/travel2.webp';
import v7 from '../images/travel3.webp';




const Travel = () => {
  return (
    <div>
        <div class="f8">
        <h2 class="f9">Use the Uber app to help you travel your way</h2>
        <h2 class="f10">Use the Uber app to help you travel<br></br> your way</h2>
        </div>
        <div class="h8">
        <Row>
            <Col lg={4} md={6}>
            <Card style={{ width: '23rem' }} >
      <img src={v5}></img>
      <Card.Body>
        <Card.Title>Ride Options</Card.Title>
        <Card.Text>
        There’s more than one way to move with Uber, <br></br>no matter where you are or where you’re<br></br> headed next.
        </Card.Text>
        <Button id="m9">Search ride options</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={6}>
            <Card style={{ width: '23rem' }}className="v5">
      <img src={v6} ></img>
      <Card.Body>
        <Card.Title>700+ airports</Card.Title>
        <Card.Text>
        You can request a ride to and from most major<br></br> airports. Schedule a ride to the airport for one<br></br> less thing to worry about.
        </Card.Text>
        <Button id="m9">Search Airports</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={6}>
            <Card style={{ width: '23rem' }} className="v5">
      <img src={v7} ></img>
      <Card.Body>
        <Card.Title>10,000+ cities</Card.Title>
        <Card.Text>
        The app is available in thousands of cities<br></br> worldwide, so you can request a ride even<br></br> when you’re far from home.
        </Card.Text>
        <Button id="m9">Search Cities</Button>
      </Card.Body>
    </Card>
            </Col>

        </Row>
        </div>
        </div>
    
  )
}

export default Travel