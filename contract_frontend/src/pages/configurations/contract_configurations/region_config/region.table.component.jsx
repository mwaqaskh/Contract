import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch, useSelector } from 'react-redux'
import Button from "@material-ui/core/Button";

import { fetchRegionStart } from '../../../../redux/config/config.actions'
import { delRegionStart } from '../../../../redux/config/config.actions'
import { selectRegionList } from '../../../../redux/config/config.selector'
import Modal from '@material-ui/core/Modal';
import RegiondelForm from './region.del.form'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table1: {
        minWidth: 400,
        maxHeight: 300,
        overflowY: 'auto',


    },
}));


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


export default function BasicTable() {
    const dispatch = useDispatch()
    const regData = useSelector(state => selectRegionList(state))
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState({});


    const classes = useStyles();



    const handleOpen = (id) => {
        setOpen(
            {
                [`setOpen-${id}`]: true
            }
        );
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log(open)
    const body = (row) => (
        <div style={modalStyle} className={classes.paper}>
            <RegiondelForm setOpen={setOpen} row={row} />
        </div>
    );

    const handleBackdropClick = () => {
        setOpen(false);
    };




    useEffect(() => {
        dispatch(fetchRegionStart())
    }, [])

    console.log(regData)


    return (
        <TableContainer className={classes.table1} component={Paper} style={{ marginTop: "1.5em" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Available Regions</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {regData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.regname}
                            </TableCell>
                            <TableCell>

                                <DeleteForeverIcon onClick={() => handleOpen(row.id)} fontSize="default" />


                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    open={open[`setOpen-${row.id}`]}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    onBackdropClick={handleBackdropClick}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}

                                >
                                    <Fade in={open}>
                                        {body(row)}
                                    </Fade>
                                </Modal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
