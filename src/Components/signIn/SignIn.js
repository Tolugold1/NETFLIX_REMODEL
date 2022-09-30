import React from 'react'
import "./SignIn.style.scss"
import { Card, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import Footer from "../Footer/Footer"
import { GiGoldBar } from "react-icons/gi"
import { AiFillGold } from 'react-icons/ai'


const SignIn = () => {


  return (
    <div className='signin'>
      <div className='net-sign-head'>
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
      </div>
      <div className='sign-card-block'>
        <Card className='sign-in-card-body'>
          <div className="head">Sign In</div>
          <Form className="sign-form">
            <FormGroup>
              <Input 
                type='email'
                name="username"
                required
              />
            </FormGroup>
            <FormGroup className='mt-4'>
              <Input 
                type='password'
                name="username"
                required
              />
            </FormGroup>
            <FormGroup className='sum_btn'>
              <Button 
                type='submit'
                className="submit-btn">
                Sign In
                </Button>
          </FormGroup>
          <FormGroup className='check'>
            <div className='box'><Input type='checkbox' /><Label htmlFor='remember' className='label-r'>Remember me</Label></div>
            <div className='help'><a href='https://www.netflix.com/LoginHelp'>need help?</a></div>
          </FormGroup>
          </Form>

          <h6>New to netflix?  <a href='/Home'>Sign up now.</a></h6>
          <h6 className='copy-right'>&copy; Tolu gold netflix design</h6>
          <GiGoldBar  className="gold-icon"/> <AiFillGold className="gold-icon"/>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn;