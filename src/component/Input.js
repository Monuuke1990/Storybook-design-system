import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Input extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        const {
            text,
            className,
            children,
            variant,
            placeholder,
        } = this.props

        let classValue = '';
        switch (variant) {
            case "outline":
                classValue = 'Form-box'
                break;
            case "filled":
                classValue = 'Bg-Form-box'
                break;
            default:
                classValue = 'Form-box'
        }

        return (

            <input className = { classValue } placeholder={placeholder}>
            </input>
        )
    }
}