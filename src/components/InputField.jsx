import React,{useState} from 'react';
import './InputField.css';

const InputField = (props) => {
    return <input
        className="input"
        {...props}
    ></input>
}

export default InputField;