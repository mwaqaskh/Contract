import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addSITESStart } from '../../../../redux/config_sites/config_sites.actions';

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
    sitename: yup
        .string('Site')
        .required('Site Name is required'),
});

const SiteAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            sitename: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addSITESStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Site Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="sitename"
                    name="sitename"
                    label="Site"
                    value={formik.values.sitename}
                    onChange={formik.handleChange}
                    error={formik.touched.sitename && Boolean(formik.errors.sitename)}
                    helperText={formik.touched.sitename && formik.errors.sitename}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Site
        </Button>
            </form>
        </div>
    );
};

export default SiteAddForm