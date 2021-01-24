import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBUStart, delBUStart } from '../../../../redux/config_bu/config_bu.actions'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import axios from '../../../../utils1.js/axios'


const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '1.5em',
        background: '#d90429'

    },
    title: {
        marginTop: '1em',
        fontSize: '1.5em'
    },
    subtitle: {
        marginTop: '2.5em',
        color: 'grey',
        fontSize: '1em'
    },


}));

const validationSchema = yup.object({

});



const BUdelForm = ({ setOpen, row }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const submittion = async (row) => {
        await dispatch(delBUStart(row));
        console.log('after deletion')
        setOpen(false)
    };


    const formik = useFormik({
        initialValues: {
            bussname: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submittion(row)
        },
    });

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '1em' }}>
            <Grid container item justify='center' alignItems='center'>
                <Grid container item alignContent='center' justify='center'>
                    <Typography className={classes.title} variant='h6'>

                        <ErrorOutlineIcon fontSize="large" color='error'></ErrorOutlineIcon>
                        Are You Sure?</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography className={classes.subtitle} variant='h6'>Click below to delete {row.bussname} Business Unit permanently</Typography>
                <form onSubmit={formik.handleSubmit}>

                    <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                        Confirm Delete
                    </Button>
                </form>
            </Grid>


        </Grid>

    );
};

export default BUdelForm;