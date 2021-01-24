import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addDIVStart } from '../../../../redux/config_div/config_div.actions';

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
    divname: yup
        .string('Division')
        .required('Division is required'),
});

const DivAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            divname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addDIVStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Division Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="divname"
                    name="divname"
                    label="Division"
                    value={formik.values.divname}
                    onChange={formik.handleChange}
                    error={formik.touched.divname && Boolean(formik.errors.divname)}
                    helperText={formik.touched.divname && formik.errors.divname}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Division
        </Button>
            </form>
        </div>
    );
};

export default DivAddForm