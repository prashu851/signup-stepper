import React,{useState} from 'react'
import './Signup.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Credentials from './Credentials';

function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [activeStep, setActiveStep] = React.useState(0);
    const onEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    const validateEmail = () =>{
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailPattern.test(email);
        isValidEmail ? setEmailError(false): setEmailError(true);
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    return(
        <div className="login-container">
            <div className="login-details">
                <div>
                    <Stepper activeStep={activeStep} alternativeLabel style={{width:"100%",background:"none"}}>
                    {[0,1,2].map((label) => (
                        <Step key={label}>
                            <StepLabel>
                                
                            </StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                </div>
                <Credentials email={email} password={password}/>
                <div className="nav-btns">
                    <button className="nav-btn" onClick={handleBack} disabled={activeStep === 0}>Previous</button>
                    <button className="nav-btn" onClick={handleNext} disabled={activeStep === 3}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Signup;