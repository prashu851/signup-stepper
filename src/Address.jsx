import React, {useState} from 'react'
import isEmpty from 'lodash/isEmpty'
import InputField from './components/InputField'

const Address = ({streetName,state: selectedState, city: selectedCity, pinCode,handleChange}) => {
    const states={
        Telangana:["Hyderabad","Warangal","Secundarabad","Nizamabad"],
        Maharashtra:["Mumbai","Pune","Nagpur","Aurangabad"],
        Karnataka:["Bangalore","Mangalore","Hubli","Gulbarga"],
        Gujarat:["Ahmedabad","Surat","Vadodara","Rajkot"]
    }

    return(
        <>
        <div className="user-input">
            <label htmlFor="streetName">Street Name</label>
            <InputField 
                type="text" 
                name="streetName" 
                placeholder="Street Name" 
                value={streetName} 
                onChange={handleChange}
            />
        </div>
        <div className="user-input">
            <label htmlFor="state">State</label>
            <select className="input" name="state" onChange={handleChange}>
                {isEmpty(selectedState) ? <option>--Select State--</option> : ''}
                {Object.keys(states).map((state)=>
                    <option selected={state === selectedState} value={state}>{state}</option>
                )}               
            </select> 
        </div>
        <div className="user-input">
            <label htmlFor="city">City</label>
            <select className="input" name="city" onChange={handleChange}>
               {isEmpty(selectedState) 
               ? ''
               : states[selectedState].map(city => <option selected={city === selectedCity} value={city}>{city}</option>)}
            </select>  
        </div>
        <div className="user-input">
            <label htmlFor="pinCode">Pin Code</label>
            <InputField 
                type="text" 
                name="pinCode" 
                placeholder="Pin Code" 
                value={pinCode} 
                onChange={handleChange}
            />
        </div>
    </>
    )
}

export default Address;