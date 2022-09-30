import React from 'react'
import "./Footer.styles.scss"
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
   return (
      <Container fluid className='footer-container'>
         <Row className='footer-row'>
            <Col sm='4' md='3' className='footer-col'> 
               <h5>Questions? Contact us.</h5><br />
               <h5>FAQ</h5><br />
               <h5>Cookie Preferences</h5>
            </Col>
            <Col sm='4' md='3' className='footer-col'>
               <h5>Help Center</h5><br />
               <h5>Corporate Information</h5>
            </Col>
            <Col sm='4' md='3' className='footer-col'>
               <h5>Terms of Use</h5>
            </Col>
            <Col sm='4' md='3' className='footer-col'>
               <h5>Privacy</h5>
            </Col>
         </Row>
      </Container>
   )
}

export default Footer;