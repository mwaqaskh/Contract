import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components/macro";
import axios from '../../../../../utils1.js/axios'
import { useHistory } from "react-router-dom";


import { fetchUserStart } from '../../../../../redux/user/user.actions'
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import { spacing } from "@material-ui/system";
const Alert = styled(MuiAlert)(spacing);



import ContractInfo from './Forms/ContractInfo'

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const { formId, formField } = checkoutFormModel;


export default function AddVendors() {
  const classes = useStyles();
  const [submitError, setSubmitError] = useState('');
  const [errorCheck, setErrorCheck] = useState();

  const dispatch = useDispatch()

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUserStart())
  }, []);


  async function _submitForm(values, actions) {

    console.log(values)


    let post_data = { ...values }

    post_data.created_by = 1;
    post_data.vendor_number = "SUPP" + Math.floor(1000 + Math.random() * 90000000);


    post_data = JSON.stringify(post_data, null, 2);
    console.log(values)
    axios
      .post(`/vendor/basic/`, post_data)
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
          history.push("/dashboard/default/")
        )
      });


  }

  function _handleReset() {
    console.log('Fired Reset')
    console.log(formInitialValues)

  }

  return (
    <React.Fragment>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema[0]}
        onSubmit={_submitForm}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form id={formId}>
            <ContractInfo formField={formField} />


            <div className={classes.buttons}>

              <Button type='reset' onClick={_handleReset} className={classes.button}>
                Reset
                    </Button>
              <div className={classes.wrapper}>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Create Vendor
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

    </React.Fragment>
  );
}
