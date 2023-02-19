import React from 'react';
import "./HomeFooter.styles.scss";
import { Row, Col, Input, FormGroup, Form } from "reactstrap";


const HomeFooter = () => {
    return (
        <div className='home-footer'>
            <Row className="footer-row">
                <Col sm="3" md="4">
                    <div className='footer-net-head'>
                        <a href='/Home'>
                            <div className='footer-flix'>
                                <span className='F0'>N</span>
                                <span className='F1'>E</span>
                                <span className='F2'>T</span>
                                <span className='F3'>F</span>
                                <span className='F4'>L</span>
                                <span className='F5'>I</span>
                                <span className='F6'>X</span>
                            </div>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm='5' md='5'>
                    <p className='question>'>Questions? call 1-543-676-7686567</p>
                </Col>
            </Row>
            <Row className="footer-body">
                <Col sm='5' md='4'>
                    <h5>FAQ</h5>
                    <h5>Investor Relations</h5>
                    <h5>Ways to watch</h5>
                    <h5>Corporate Information</h5>
                    <h5>Netflix Originals</h5>
                </Col>
                <Col sm='5' md='4'>
                    <h5>Help Center</h5>
                    <h5>Jobs</h5>
                    <h5>Terms of use</h5>
                    <h5>Contact Us</h5>
                </Col>
                <Col sm='5' md='4'>
                    <h5>Account</h5>
                    <h5>Redeem gitf cards</h5>
                    <h5>Privacy</h5>
                    <h5>Speed</h5>
                </Col>
            </Row>
            <Row className='language'>
                <Col sm='4' md='3'>
                    <Form>
                        <FormGroup>
                            <Input type='select'>
                                <option>English </option>
                                <option>French </option>
                                <option>Yoruba </option>
                                <option>Russian </option>
                                <option>Chinese </option>
                                <option>Efik </option>
                            </Input>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default HomeFooter;