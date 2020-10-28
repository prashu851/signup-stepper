import React, {useState} from 'react'
import isEmpty from 'lodash/isEmpty'

const Address = ({streetName,state,city,pinCode,handleChange}) => {
    const states={
        Telangana:["Hyderabad","Warangal","Secundarabad","Nizamabad"],
        Maharashtra:["Mumbai","Pune","Nagpur","Aurangabad"],
        Karnataka:["Bangalore","Mangalore","Hubli","Gulbarga"],
        Gujarat:["Ahmedabad","Surat","Vadodara","Rajkot"]
    }

    return(
        <div className="login-form">
        <div className="user-input">
            <label htmlFor="streetName">Street Name</label>
            <input className="input" type="text" name="streetName" placeholder="Street Name" value={streetName} onChange={handleChange}/>
        </div>
        <div className="user-input">
            <label htmlFor="state">State</label>
            <select className="input" name="state" onChange={handleChange}>
            <option disabled selected>--Select State--</option>
            {Object.keys(states).map((state)=>
                <option>{state}</option>
                )}               
            </select> 
        </div>
        <div className="user-input">
            <label htmlFor="city">City</label>
            <select className="input" name="city" onChange={handleChange}>
               {isEmpty(state) ? '': states[state].map(city => <option>{city}</option>)}
            </select>  
        </div>
        <div className="user-input">
            <label htmlFor="pinCode">Street Name</label>
            <input className="input" type="number" name="pinCode" placeholder="Pin Code" value={pinCode} onChange={handleChange}/>
        </div>
    </div>
    )
}

export default Address;