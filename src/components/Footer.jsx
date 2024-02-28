import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Facebook from "../assets/images/Facebook.png";
import Web from "../assets/images/Web.png";
import Phone from "../assets/images/Phone.png";
const Footer = () => {
  return (
    <div className='footer'>
        <Container>
      <Row>
        <Col>
        <div className='d-flex'>
        
        <img src={Phone} className='footer_img' width="17px" height="17px" alt="" /><h6 className='footer_text'>Toll free 1800 200 1234</h6>
        
        </div>
        </Col>
        <Col>
        <div className='d-flex'>
        <img src={Facebook} className='footer_img' height="20px" alt="" /><h6 className='footer_text'>www.facebook.com/cripumps</h6>
        </div>
        </Col>
        <Col>
        <div className='d-flex'>
        <img src={Web} className='footer_img' width="25px" height="25px" alt="" /><h6 className='footer_text'>www.crigroups.com</h6>
        </div>
        </Col>
        
      </Row>
    </Container>
    </div>
  )
}

export default Footer