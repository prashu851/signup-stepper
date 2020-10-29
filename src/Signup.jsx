import React,{useState} from 'react'
import { useFormik } from 'formik';
import './Signup.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Credentials from './Credentials';
import PersonalInfo from './PersonalInfo'
import Address from './Address'
import validate from './SignupValidator'
import { isEmpty } from 'lodash';

function Signup(){
    const handleSubmit = (values) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        alert(JSON.stringify(values, null, 2));
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          firstName:'',
          lastName:'',
          phoneNumber:'',
          streetName:'',
          state:'',
          city:'',
          pinCode:''
        },
        validate:validate,
        onSubmit: handleSubmit
    });
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderForm = () => {
        if(activeStep === 0) {
            return <Credentials email={formik.values.email} password={formik.values.password} handleChange={formik.handleChange} errors={formik.errors} handleBlur={formik.handleBlur} touched={formik.touched} />
        } else if(activeStep === 1) {
            return <PersonalInfo firstName={formik.values.firstName} lastName={formik.values.lastName} phoneNumber={formik.values.phoneNumber} handleChange={formik.handleChange} />
        } else if (activeStep === 2) {
            return <Address streetName={formik.values.streetName} state={formik.values.state} city={formik.values.city} pinCode={formik.values.pinCode} handleChange={formik.handleChange} />
        } else {
            return <div className="login-form">
                        <h1>Details taken</h1>
                    </div>
        }
    }

    const renderButtons = () => {
        if (activeStep > 2) {
            return '';
        }
        return <div className="nav-btns">
            <button className="nav-btn" onClick={handleBack} disabled={activeStep === 0}>Previous</button>
            {activeStep === 2
            ? <button className="nav-btn" onClick={formik.handleSubmit}>Submit</button> 
            : <button className="nav-btn" 
                onClick={handleNext} 
                disabled={isEmpty(formik.errors) && formik.touched.email && formik.touched.password ? false : true}
                >Next</button>}
        </div>
    }
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
                <div className="login-form">
                    { renderForm() }
                </div>
                { renderButtons() }
            </div>
        </div>
    )
}
export default Signup;