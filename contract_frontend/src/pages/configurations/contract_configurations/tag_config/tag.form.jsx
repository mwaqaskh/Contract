import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTAGSStart } from '../../../../redux/config_tags/config_tags.actions';

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
    tagname: yup
        .string('Tag')
        .required('Tag is required'),
});

const TagAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            tagname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addTAGSStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Tag Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="tagname"
                    name="tagname"
                    label="Tag"
                    value={formik.values.tagname}
                    onChange={formik.handleChange}
                    error={formik.touched.tagname && Boolean(formik.errors.tagname)}
                    helperText={formik.touched.tagname && formik.errors.tagname}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Tag
        </Button>
            </form>
        </div>
    );
};

export default TagAddForm