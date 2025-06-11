import React from 'react'
import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import ss from '../images/google.svg';
 import s2 from '../images/appstore.svg';
 import { FaFacebook } from "react-icons/fa";
 import { FaXTwitter } from "react-icons/fa6";
 import { AiOutlineYoutube } from "react-icons/ai";
 import { FaLinkedin } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 


const Foot = () => {
  return (
    <div>
        <div class="f5">
        <h4 class="u1">Uber</h4><br></br>
        <p class="u2">Visit Help Center</p><br></br>
        <Row>
            <Col lg={2} md={12}></Col>
            <Col lg={2} md={6}>
            <ul>
                <li>Company</li><br></br>
                <li>About us</li><br></br>
                <li>Newsroom</li><br></br>
                <li>Investors</li><br></br>
                <li>Blog</li><br></br>
                <li>Careers</li>
            </ul>
            </Col>
              {/* <Col lg={1} md={12}></Col>  */}
             <Col lg={2} md={6}>
             <ul>
                <li>Products</li><br></br>
                <li>Drive</li><br></br>
                <li>Deliver</li><br></br>
                <li>Eat</li><br></br>
                <li>Uber for Business</li><br></br>
                <li>Uber Freight</li><br></br>
                <li>Gift cards</li><br></br>
                <li>Uber Health</li><br></br>
             </ul>
             </Col>
             {/* <Col lg={1} md={12}></Col> */}
             <Col lg={2} md={6}>
             <ul>
                <li>Global Citizenship</li><br></br>
                <li>Safety</li><br></br>
                <li>Sustainability</li><br></br>
                </ul>
                </Col>
                <Col lg={2} md={6}>
                <ul>
                    <li>Travel</li><br></br>
                    <li>Reserve</li><br></br>
                    <li>Airports</li><br></br>
                    <li>Cities</li>
                </ul>
                </Col>
                <Col lg={2} md={12}></Col>
        </Row>
        
        <Row>
          {/* <Col lg={2} md={12}> </Col> */}
          {/* <div class="io"> */}
         
          <Col lg={6} md={12}>
        <div class="io">
         <FaFacebook />
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;  */}

         <FaXTwitter />
        {/* // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // &nbsp;
        // &nbsp;
        // &nbsp;
        // &nbsp;
        // &nbsp; */}

        <AiOutlineYoutube />
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;  */}

        <FaLinkedin />
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp; */}

        <FaInstagram />
        </div>
        
        </Col>
        <Col lg={3} md={12}></Col>
        
          <Col lg={1} md={12}> </Col> 
<Col lg={5} md={12}></Col> 
</Row>
<Row>
  <Col lg={2} md={12}></Col>
  <Col lg={6} md={12}></Col>
  <Col lg={4} md={12}>
<p>
  English &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coimbatore</p> </Col>  
   {/* </div> */}
</Row>
        <img src={ss} class="s3"></img>
        <img src={s2} class="s4"></img>
</div>
    </div>
  )
}

export default Foot