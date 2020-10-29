import React, {useState} from 'react';
import InputField from './components/InputField';
import './Credentials.css'

const Credentials = ({email, password, handleChange, handleBlur, errors, touched}) => {
    return(
        <>
            <div className="user-input">
                <label htmlFor="email">Email</label>
                <InputField  
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                />
                {touched.email && errors.email?<small>{errors.email}</small>:''}
            </div>
            <div className="user-input">
                <label htmlFor="password">Password</label>
                <InputField 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                />
                <span>atleast 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 special character</span>
                {touched.password && errors.password?<small>{errors.password}</small>:''}
            </div>
        </>
    )
}
export default Credentials;