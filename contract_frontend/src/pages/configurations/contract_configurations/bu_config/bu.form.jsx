import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addBUStart } from '../../../../redux/config_bu/config_bu.actions'

import axios from '../../../../utils1.js/axios'


const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '1.5em'
    },
    title: {
        marginTop: '1em'
    },

}));

const validationSchema = yup.object({
    bussname: yup
        .string('Business Unit')
        .required('Business Unit is required'),
});

const BUAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            bussname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addBUStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Business Unit Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="bussname"
                    name="bussname"
                    label="Business Unit"
                    value={formik.values.bussname}
                    onChange={formik.handleChange}
                    error={formik.touched.bussname && Boolean(formik.errors.bussname)}
                    helperText={formik.touched.bussname && formik.errors.bussname}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Business Unit
        </Button>
            </form>
        </div>
    );
};

export default BUAddForm