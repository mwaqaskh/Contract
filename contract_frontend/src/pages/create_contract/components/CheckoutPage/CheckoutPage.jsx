import React, { useState, useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components/macro";
import { CC_DataTrans } from './Utils/CC_DataTrans'
import axios from '../../../../redux/../utils1.js/axios'
import { useHistory } from "react-router-dom";



import { setCCData } from '../../../../redux/create_contract/cc.actions'

import { fetchUserStart } from '../../../../redux/user/user.actions'
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import { spacing } from "@material-ui/system";
const Alert = styled(MuiAlert)(spacing);


import AddressForm from './Forms/AddressForm';
import BuyerForm from './Forms/BuyerForm'
import ContractInfo from './Forms/ContractInfo'
import ContractDetails from './Forms/ContractDetails'
import ApplicableFor from './Forms/ApplicableFor'
import ReviewOrder from './ReviewOrder';
import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Supplier Info', 'Buyer Info', 'Contract Info', 'Contract Details', 'Applicable For', 'Review'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <BuyerForm formField={formField} />;
    case 2:
      return <ContractInfo formField={formField} />;
    case 3:
      return <ContractDetails formField={formField} />;
    case 4:
      return <ApplicableFor formField={formField} />;
    case 5:
      return <ReviewOrder formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [submitError, setSubmitError] = useState('');
  const [errorCheck, setErrorCheck] = useState();

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const dispatch = useDispatch()
  const ccreduxInitialValues = useSelector(state => state.cc)
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUserStart())
  }, []);


  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    // await _sleep(1000);
    console.log(values)
    //const post_data = JSON.stringify(values, null, 2);

    post_data = { ...values }

    let post_data = CC_DataTrans(post_data)
    post_data = JSON.stringify(post_data, null, 2);
    console.log(values)
    axios
      .post(`/basic/contract/`, post_data)
      .then((res) => {
        setErrorCheck(res.data.error)
        console.log(res)
        console.log(res.data.error)
        if (res.data.error) {
          const error = JSON.stringify(res.data.message, null, 2)
          setSubmitError(error), actions.setSubmitting(false)
        } else (
          setSubmitError(''),
          console.log('No Error'),
          actions.setSubmitting(false),
          dispatch(setCCData(formInitialValues)),
          history.push("/dashboard/default/")
        )
      });

    //setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    console.log('Check Next')
    if (isLastStep) {
      console.log('fired final')
      console.log(JSON.stringify(values, null, 2))
      _submitForm(values, actions);
    } else {
      console.log('fired Next')
      dispatch(setCCData(values))
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      console.log(JSON.stringify(values, null, 2))

    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  function _handleReset() {
    console.log('Fired Reset')
    console.log(formInitialValues)
    dispatch(setCCData(formInitialValues))
    setActiveStep(0);

  }

  return (
    <React.Fragment>

      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
            <Formik
              initialValues={ccreduxInitialValues || formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {_renderStepContent(activeStep)}

                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button type='reset' onClick={_handleReset} className={classes.button}>
                        Reset
                    </Button>
                    )}
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack} className={classes.button}>
                        Back
                    </Button>
                    )}
                    <div className={classes.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? 'Submit Contract' : 'Next'}
                      </Button>

                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>

                  </div>
                  {submitError ?
                    <div>
                      <Alert mb={4} severity="error">
                        {submitError}
                      </Alert>
                    </div>

                    : ''}
                </Form>
              )}
            </Formik>
          )}
      </React.Fragment>
    </React.Fragment>
  );
}
