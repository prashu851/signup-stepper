import React,{useState} from 'react'

const PersonalInfo = ({firstName, lastName, number, handleChange}) => {
    return(
        <div className="login-form">
            <div className="user-input">
                <label htmlFor="firstName">First Name</label>
                <input className="input firstname" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange}/>
            </div>
            <div className="user-input">
                <label htmlFor="lastName">Password</label>
                <input className="input lastName" type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange} /> 
            </div>
            <div className="user-input">
                <label htmlFor="number">Password</label>
                <input className="input number" type="number" name="number" placeholder="Mobile Number" value={number} onChange={handleChange} /> 
            </div>
        </div>
    )
}

export default PersonalInfo;