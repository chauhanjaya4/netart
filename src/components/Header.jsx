import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from "../assets/images/logo.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <>
        <Container fluid="md">
      
        

    
   
        <div className='text-center' >
        
        <img src={logo}  className='logo ' alt="" />
        </div>
        
      
    </Container>
    </>
  )
}

export default Header