import React from 'react'
import Card from 'react-bootstrap/Card';
import d from '../images/ride.png' 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Sug = () => {
  return (
    <div>
    
        <Row>
        <Col lg={2} md={12}></Col>
        <Col lg={4} md={12}>
        <div className="a">
          
        <h3> Sugesstions</h3>
        
     <Card style={{ width: '25rem' }}>
      <Card.Body id="g">
      <div class="c">
        <div class="s">
        <Card.Title>Ride</Card.Title>
        
        <Card.Text class="s">
          Go anywhere with uber.Request a<br></br>ride, hop in, and go
        </Card.Text>
        <button class="h">Details</button>
        </div>
        
        <div>
        <img src={d} class="n"></img>
        </div>
        </div>
        
      </Card.Body>
    </Card>
    </div>
    </Col>
    <Col lg={6} md={12}></Col>
    </Row>
    </div>
  

    
    
  )
}

export default Sug
