import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Button from './Button'


function form (){
    return(<div className="horizontal-form">
        <Input variant = "filled" placeholder="Username"></Input>
        <Input variant = "filled" placeholder="Password"></Input>
        <Button variant = "primary"> Submit</Button>
        </div>)
}
export default form;