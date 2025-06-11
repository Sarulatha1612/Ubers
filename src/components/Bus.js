import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gy from '../images/girl.webp';


const Bus = () => {
  return (
    <div>
        <div class="n2"> 
        <Row>
        {/* <div class="n2"> */}
            <Col lg={2} md={12}></Col>
            
            <Col lg={4} md={12}>
        <div class="look">
            <h1>Looking for business<br></br> solutions?</h1>
            <p>Get information about how companies leverage &nbsp;<span><a href="" >Uber <br></br>for Business</a></span></p>
            <ul class="f6">
                <li><a href="">Business travel</a></li>
                <li><a href="">Courtesy rides</a></li>
                <li><a href="">Meal programs</a></li>
                <li><a href="">Item delivery</a></li>
            </ul>
            <button class="vj">Get Started</button> &nbsp; &nbsp;<a href="">Check out our solution</a>
            </div>
            </Col>
            
            <Col lg={4} md={12}>
            <img src={gy} class="j3"></img>
            
            </Col>
           
            <Col lg={2} md={12}></Col>
            {/* </div>  */}
        </Row>
</div>
    </div>
  )
}

export default Bus