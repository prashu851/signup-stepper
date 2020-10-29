import React,{useState} from 'react'
import InputField from './components/InputField';

const PersonalInfo = ({firstName, lastName, phoneNumber, handleChange}) => {
    return(
        <>
            <div className="user-input">
                <label htmlFor="firstName">First Name</label>
                <InputField 
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName} 
                    onChange={handleChange}
                />
            </div>
            <div className="user-input">
                <label htmlFor="lastName">Last Name</label>
                <InputField 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={lastName} 
                    onChange={handleChange}
                /> 
            </div>
            <div className="user-input">
                <label htmlFor="phoneNumber">Mobile Number</label>
                <InputField 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Mobile Number" 
                    value={phoneNumber} 
                    onChange={handleChange}
                /> 
            </div>
        </>
    )
}

export default PersonalInfo;