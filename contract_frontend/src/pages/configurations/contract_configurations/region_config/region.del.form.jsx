import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { delRegionStart, fetchRegionStart } from '../../../../redux/config/config.actions'

import axios from '../../../../utils1.js/axios'


const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '1.5em',
        background: '#d90429'

    },
    title: {
        marginTop: '1em'
    },

}));

const validationSchema = yup.object({

});



const RegiondelForm = ({ setOpen, row }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const submittion = async (row) => {
        await dispatch(delRegionStart(row));
        console.log('after deletion')
        setOpen(false)
    };


    const formik = useFormik({
        initialValues: {
            regname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submittion(row)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h5'>Deleting {row.regname}</Typography>
            <form onSubmit={formik.handleSubmit}>

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Confirm Delete
        </Button>
            </form>
        </div>
    );
};

export default RegiondelForm