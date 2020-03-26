

import React from 'react';
import Message from '../component/Message';
import imageWarning from '../images/warning-icon.png'
import imageSuccess from '../images/success-icon.png'
import imageError from '../images/error-icon.png'
import '../styles.css'
//import '../story.css'


export default {
  title: 'Messages',
  component: Message,
};

export const MessageAll = () =>
<div className="Message">
  <Message variant = "message-1"><div className="ErrorMsg" >
    <h6>Error Message</h6>
      <p className="msgTxt">An error message appears when something is wrong! You forgot to fill out a field, or the requirements of a field have not been met properly, etc.</p>
      <p className="err-msg"><span><img src={imageError} /></span><span className="txtMsg errTxt">Oh no, something went wrong. Fix this error.</span></p>
    </div>
  </Message>

  <Message variant = "message-2"><div className="WarnMsg" >
    <h6>Warning message</h6>
      <p className="msgTxt">An error message appears when something is wrong! You forgot to fill out a field, or the requirements of a field have not been met properly, etc.</p>
      <p className="warn-msg"><span><img src={imageWarning} /></span><span className="txtMsg WarnTxt">Oh no, something went wrong. Fix this error.</span></p>
     </div>
  </Message>

  <Message variant = "message-3"><div className="SuccessMsg" >
    <h6>Success Message</h6>
      <p className="msgTxt">An error message appears when something is wrong! You forgot to fill out a field, or the requirements of a field have not been met properly, etc.</p>
      <p className="success-msg"><span><img src={imageSuccess} /></span><span className="txtMsg SuccessTxt">Oh no, something went wrong. Fix this error.</span></p>
    </div>
  </Message>
</div>

export const Message1 = () => 
<Message variant = "Message-1">
  <div className="ErrorMsg" >
  <h6>Error Message</h6>
    <p className="msgTxt">An error message appears when something is wrong! You forgot to fill out a field, or the requirements of a field have not been met properly, etc.</p>
    <p className="err-msg">
      <span><img src={imageError} /></span>
      <span className="txtMsg errTxt">Oh no, something went wrong. Fix this error.</span>
    </p>
  </div>
</Message>;


export const Message2 = () => 
<Message variant = "Message-2">
  <div className="WarnMsg" >
    <h6>Warning message</h6>
    <p className="msgTxt">An error message appears when something is wrong! You forgot to fill out a field, or the requirements of a field have not been met properly, etc.</p>
    <p className="warn-msg">
      <span><img src={imageWarning} /></span>
      <span className="txtMsg WarnTxt">Oh no, something went wrong. Fix this error.</span>
    </p>
  </div>
</Message>;


export const Message3 = () => 
<Message variant = "Message-3">
  <div className="SuccessMsg" >
    <h6>Success Message</h6>
    <p className="msgTxt">An error message appears when something is wrong! You forgot to fill out a field, or the requirements of a field have not been met properly, etc.</p>
    <p className="success-msg">
      <span><img src={imageSuccess} /></span>
      <span className="txtMsg SuccessTxt">Oh no, something went wrong. Fix this error.</span>
    </p>
  </div>
</Message>;
