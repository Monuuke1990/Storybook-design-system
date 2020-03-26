import React, { Component } from 'react'

import { Example, Button } from 'demo-design'

export default class App extends Component {
    render() {
        return ( <div>
            <
            Example text = 'Modern React component module'
            className = "secondary" / >
            < Button text = "Test"
            variant = "primary" > Add < /Button>

            <Button text = "Test"
            variant = "sm-primary" > Add < /Button>

            <Button text = "Test"
            variant = "secondary" > Cancel < /Button> 

            < Button variant = "sm-secondary"
            disabled > Cancel < /Button> <
            Button variant = "primary-disabled"
            disabled > Add < /Button>

            <Button variant = "secondary-disabled"
            disabled > Add < /Button>

            <Button variant = "danger"
            disabled > Delete < /Button>

            <
            Button variant = "sm-danger"
            disabled > Delete < /Button>

            <Button variant = "primary-wide"
            disabled > Add < /Button> <
            Button variant = "secondary-wide"
            disabled > More News < /Button> <
            Button variant = "danger-wide"
            disabled > Delete < /Button>


            </div >

        )
    }
}