import React, {useState} from 'react'

function Credentials(){
    return(
        <div className="login-form">
            <div className="user-input">
                <label htmlFor="email">Email</label>
                <input className="input email" type="email" name="email" placeholder="Email" onChange={onEmailChange} onBlur={validateEmail}/>
                {emailError?<span>Enter valid email</span>:''}
            </div>
            <div className="user-input">
                <label htmlFor="password">Password</label>
                <input className="input password" type="password" name="password" placeholder="Password" onChange={onPasswordChange} /> 
            </div>
            <div className="user-input">
                <label htmlFor="password">Confirm Password</label>
                <input className="input con-password" type="password" name="password" placeholder="Password" onChange={onPasswordChange} /> 
            </div>
        </div>
    )
}
export default Credentials;