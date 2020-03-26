import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Message extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        const {
            text,
            className,
            children,
            variant,
        } = this.props


        let classValue = '';
        switch (variant) {
            case "error-msg":
                classValue = 'message-1'
                break;
            case "warn-msg":
                classValue = 'message-2'
                break;
            case "success-msg":
                classValue = 'message-3'
                break;
                 
            default:
                classValue = 'message-1'
        }

        return (

            <div className = { classValue }>
            { children } </div>
        )
    }
} 