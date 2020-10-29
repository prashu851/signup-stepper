import React, {useState} from 'react'
import './Credentials.css'

const Credentials = ({email, password, handleChange, handleBlur, errors, touched}) => {
    return(
        <div className="login-form">
            <div className="user-input">
                <label htmlFor="email">Email</label>
                <input className="input email" type="email" name="email" placeholder="Email" value={email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && errors.email?<small>{errors.email}</small>:''}
            </div>
            <div className="user-input">
                <label htmlFor="password">Password</label>
                <input className="input password" type="password" name="password" placeholder="Password" value={password} onChange={handleChange} onBlur={handleBlur} />
                <span>atleast 8 characters, 1 lowercase, 1 uppercase and 1 special character</span>
                {touched.password && errors.password?<small>{errors.password}</small>:''}
            </div>
        </div>
    )
}
export default Credentials;