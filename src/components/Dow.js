import React from 'react'
import im from '../images/qrcode.webp'
import yh from '../images/uber.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dow = () => {
  return (
    <div>
        <div class="v3">
        <h3 class="h3">Do more in the app</h3>
        <h3 class="do1">Do more in the app</h3>
        <Row>
            <Col lg={2} md={12}></Col>
            <Col lg={4} md={12}>
            <div class="bk">
                <div>
            <img src={im} class="ki"></img>
            </div>
            <div class="n0">
            <h5>Download the Uber app</h5>
            <p>Scan to download</p>
            </div>
            </div>
            </Col>
            <Col lg={4} md={12}>
            <div class="nv">
                <div >
            <img src={yh}class="l6"></img>
            </div>
            <div>
            <h5 class="g7">Sign up to ride</h5>
            
            </div>
            </div>
            </Col>
            <Col lg={2} md={12}></Col>
        </Row>
        </div>
        <p class="u8">Certain requirements and features vary by country, region, and city.</p>
        <p class="u9">Certain requirements and features vary by country, region, and city.</p>
    </div>
  )
}

export default Dow