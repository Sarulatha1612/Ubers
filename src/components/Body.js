import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import b1 from '../images/body1.webp'
import b2 from '../images/body2.webp'
import b3 from '../images/body3.webp'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Body = () => {
  return (
    <div>
        
        <div class="k">

          
        <Row>
        <Col  class="l"lg={4} md={6}>
        <Card style={{ width: '25rem' }}>
      <img src={b1}></img>
      <Card.Body>
        <Card.Title>Reserve a ride that’s ready when you are</Card.Title>
        <Card.Text>
        Now more than ever, reservations are a way of<br></br>life. Reserve a premium Uber experience, up to <br></br>90 days in advance, for whenever you’re ready<br></br> to ride.
        </Card.Text>
        <Button id="d">Learn more about uber Reserve</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col  class="l" lg={4} md={6}>
    <Card style={{ width: '25rem' }}>
    <img src={b2}></img>
      <Card.Body>
        <Card.Title>Use teen accounts on Uber**</Card.Title>
        <Card.Text>
        Peace of mind for you, independence for them.<br></br> With a teen account, they’ll have the freedom to<br></br>request their own rides—and you’ll be notified <br></br>every time they do. Plus, with live safety features <br></br>and real-time updates, you can follow along<br></br> from pickup to dropoff. Currently available only<br></br> in select locations.


        </Card.Text>
        <Button id="d">Learn how teen account works</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col class="l" lg={4} md={6}>
    <Card style={{ width: '25rem' }}>
    <img src={b3}></img>
      <Card.Body>
        <Card.Title>Car rentals nearby for any occasion</Card.Title>
        <Card.Text>
        Whether you need a car today or in the future,<br></br> Uber’s online booking experience will help you<br></br> find the right vehicle for a family vacation, a<br></br> weekend getaway, a road trip, airport travel, and <br></br>more. With Uber Rent, your car rental needs <br></br>are prioritized.


        </Card.Text>
        <Button id="d">Learn more about uber Reserve</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>

    </div>
  )
}

export default Body