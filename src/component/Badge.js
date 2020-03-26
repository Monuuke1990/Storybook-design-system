import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Badge extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    render() {
        const {
            text,
            className,
            variant,
            children,
        } = this.props
        let classValue = '';
        switch (variant) {
            case "primary":
                classValue = 'badge bagde-primary'
                break;
            case "secondary":
                classValue = 'badge bagde-secondary'
                break;
            case "success":
                classValue = 'badge bagde-success'
                break;
            case "danger":
                classValue = 'badge bagde-danger'
                break;
                case "warning":
                classValue = 'badge bagde-warning'
                break;
            case "info":
                classValue = 'badge bagde-info'
                break;
            case "light":
                classValue = 'badge bagde-light'
                break;
            case "dark":
                classValue = 'badge bagde-dark'
                break;
          
           
            default:
                classValue = 'badge bagde-primary'
        }
        return (

            <div className = { classValue } > { children } </div>
        )
    }
}