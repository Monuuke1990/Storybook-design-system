import React from 'react';
//import Form from '../component/Form';
import '../styles.css'
import '../story.css'
import Button from '../component/Button';
import Input from '../component/Input';
 export default {
    title: 'Form',
  component: Form,
 };

  export const form1 = () =>
  <div className="styleForm">
  <div className="pagesContent">
      <span>Forms</span>
      Usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</div>

  <div className="horizontal-form1">

  
   <Input variant = "filled" placeholder="Email"></Input>
  <Input variant = "filled" placeholder="Password">
    </Input><Button variant = "primary"> Submit</Button></div></div>
  
  export const login = () =><div className="horizontal-form">
    <Input variant = "filled" placeholder="Username"></Input>
  <Input variant = "filled" placeholder="Password">
    </Input><Button variant = "primary"> Login</Button></div>

  
  function Form(){
    return(<div></div>)
  }

  function Login(){
    return(<div></div>)
  }
  