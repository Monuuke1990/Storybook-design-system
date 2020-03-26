import React from 'react';
import Input from '../component/Input';
import '../styles.css'
import '../story.css'

export default {
    title: 'Input',
    component: Input,
  };

  export const Input1 = () => <div className="commonbox"><Input variant = "filled" placeholder="Username"></Input>;</div>
  export const Input2 = () =><div className="commonbox"><Input variant = "outline" placeholder="Email"></Input>;</div> 