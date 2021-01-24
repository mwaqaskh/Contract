import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addRegionStart } from '../../../../redux/config/config.actions'

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
    regname: yup
        .string('Enter your email')
        .required('Email is required'),
});

const RegionAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            regname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addRegionStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Region Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="regname"
                    name="regname"
                    label="Region Name"
                    value={formik.values.regname}
                    onChange={formik.handleChange}
                    error={formik.touched.regname && Boolean(formik.errors.regname)}
                    helperText={formik.touched.regname && formik.errors.regname}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Region
        </Button>
            </form>
        </div>
    );
};

export default RegionAddForm