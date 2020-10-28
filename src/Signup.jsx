import React,{useState} from 'react'
import { useFormik } from 'formik';
import './Signup.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Credentials from './Credentials';
import PersonalInfo from './PersonalInfo'
import Address from './Address'

function Signup(){
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          firstName:'',
          lastName:'',
          number:null,
          streetName:'',
          state:'',
          city:'',
          pinCode:null
        },
        
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
    const [emailError, setEmailError] = useState(false)
    const [activeStep, setActiveStep] = React.useState(0);
    
    const validateEmail = () =>{
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailPattern.test('');
        isValidEmail ? setEmailError(false): setEmailError(true);
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        formik.handleSubmit()
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
                <Credentials email={formik.values.email} password={formik.values.password} handleChange={formik.handleChange} />
                <PersonalInfo firstName={formik.values.firstName} lastName={formik.values.lastName} number={formik.values.number} handleChange={formik.handleChange} />
                <Address streetName={formik.values.streetName} state={formik.values.state} city={formik.values.city} pinCode={formik.values.pinCode} handleChange={formik.handleChange} />
                <div className="nav-btns">
                    <button className="nav-btn" onClick={handleBack} disabled={activeStep === 0}>Previous</button>
                    <button className="nav-btn" onClick={handleNext} disabled={activeStep === 3}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Signup;