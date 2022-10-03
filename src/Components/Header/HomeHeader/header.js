import React, { useState } from 'react';
import './header.styles.scss'
import { Button, Container, Form,Row, Input, Col, FormFeedback, FormGroup, Label } from 'reactstrap';
import WatchComponent from '../../WatchComponent/Watch';
import { VscArrowRight } from 'react-icons/vsc'
import { Link } from "react-router-dom"
import MovieCarousel from '../../Movies/MovieCarousel';
import Plans from '../../Plan/plan';
import HomeFooter from '../../Footer/HomeFooter';



const Header = () => {

   const [ mail, setMail ] = useState("");
   const [ show, setShow ] = useState(false)

   const handleSubmit = (event) => {

      if (mail) {
         setShow(true)
      } else {
         event.preventDefault()
         setShow(true)
      }
   }

   return (
      <>
      <Container fluid className='header-container'>
         <div className='nav-head'>
            <a href='/Home'>
               <div className='netflix'>
                  <span className='w0'>N</span>
                  <span className='w1'>E</span>
                  <span className='w2'>T</span>
                  <span className='w3'>F</span>
                  <span className='w4'>L</span>
                  <span className='w5'>I</span>
                  <span className='w6'>X</span>
               </div>
            </a>
            <div className='net-btn'>
               <Link to="/signin" >
                  Sign In
               </Link>
            </div>
            
         </div>
         <div className='intro'>
            <div className='head-text'>
               <h1 className='ht1'>Unlimited movies, TV shows, and more.</h1>
               <h3 className='ht2'>Watch anywhere. Cancel anytime.</h3>
               <h3 className='ht3'>Ready to watch? Enter your email to create or restart your membership.</h3>
            </div>
            
            <Form className='email_form' onSubmit={handleSubmit}>
               <Row className='email_row'>
                  <Col sm='10' md='8' className='fill-in'>
                        <FormGroup>
                           <Label htmlFor='mail'></Label>
                           <Input 
                           type='email' 
                           name='email' 
                           placeholder='Enter your email address' 
                           className='form-input' 
                           onChange={(event) => {
                              setMail(event.target.value)
                           }} />
                           <FormFeedback className={ show ? 'feedback' : 'nfeedback'}valid>Enter your email</FormFeedback>
                        </FormGroup>
                  </Col>
                  <Col sm='4' md='2' className='start'>
                     <Label htmlFor='btn'></Label>
                     <Button type='submit' className='form-btn' ><h5 className='G-started'>Get started</h5> <VscArrowRight className='arrow'/></Button>
                  </Col>
               </Row>
            </Form>  
         </div>
      </Container>
      <WatchComponent />
      <MovieCarousel />
      <Plans />
      <HomeFooter />
      </>
   )
}

export default Header;