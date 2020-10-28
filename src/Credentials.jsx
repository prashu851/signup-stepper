import React, {useState} from 'react'
import './Credentials.css'

const Credentials = ({email, password, handleChange}) => {
    return(
        <div className="login-form">
            <div className="user-input">
                <label htmlFor="email">Email</label>
                <input className="input email" type="email" name="email" placeholder="Email" value={email} onChange={handleChange}/>
            </div>
            <div className="user-input">
                <label htmlFor="password">Password</label>
                <input className="input password" type="password" name="password" placeholder="Password" value={password} onChange={handleChange} /> 
            </div>
        </div>
    )
}
export default Credentials;