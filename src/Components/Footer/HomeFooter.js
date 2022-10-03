import React from 'react';
import "./HomeFooter.styles.scss";
import { Row, Col, Input, FormGroup, Form } from "reactstrap";
import { IoMdArrowDropdown } from "react-icons/io"


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
                    <h1>FAQ</h1>
                    <h1>Investor Relations</h1>
                    <h1>Ways to watch</h1>
                    <h1>Corporate Information</h1>
                    <h1>Netflix Originals</h1>
                </Col>
                <Col sm='5' md='4'>
                    <h1>Help Center</h1>
                    <h1>Jobs</h1>
                    <h1>Terms of use</h1>
                    <h1>Contact Us</h1>
                </Col>
                <Col sm='5' md='4'>
                    <h1>Account</h1>
                    <h1>Redeem gitf cards</h1>
                    <h1>Privacy</h1>
                    <h1>Speed</h1>
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