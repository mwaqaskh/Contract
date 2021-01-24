import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addDEPTStart } from '../../../../redux/config_dept/config_dept.actions';

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
    depname: yup
        .string('Department')
        .required('Department is required'),
});

const DeptAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            depname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addDEPTStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Department Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="depname"
                    name="depname"
                    label="Department"
                    value={formik.values.depname}
                    onChange={formik.handleChange}
                    error={formik.touched.depname && Boolean(formik.errors.depname)}
                    helperText={formik.touched.depname && formik.errors.depname}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Department
        </Button>
            </form>
        </div>
    );
};

export default DeptAddForm