import React from 'react'
import img from '../images/image.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import { FaCircleDot } from "react-icons/fa6";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const Req = () => {
  return (
    <div>
      <Row>
        <Col lg={2} md={12}></Col>
    <Col lg={4} md={6}>
      
      {/* <div class="d"> */}
        <div class="d1">
        
          
       
          
        <h3 class="e">Request a Ride</h3>
        <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"><FaCircleDot /></InputGroup.Text> */}
        <Form.Control
          placeholder="Enter location"
          aria-label="Enter location"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3 b-m">
        {/* <InputGroup.Text id="basic-addon1 n-l">@</InputGroup.Text> */}
        <Form.Control 
          placeholder="Enter designation"
          aria-label="Enter designation"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <button class="h">See prices</button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button class="i">Schedule for later</button>
    </div>
        
        </Col>
        <Col lg={4} md={6}> 
    <div>
        <img src={img} class="j"></img>
</div>
</Col>
<Col lg={2} md={12}></Col>
        {/* </div> */}
        </Row> 
    </div>
  )
}

export default Req