import React from 'react';
import './Button.css';

const Button = ({buttonText, ...props}) => {
    return <button
        className="nav-btn"
        {...props}
        >{buttonText}</button>
}

export default Button;