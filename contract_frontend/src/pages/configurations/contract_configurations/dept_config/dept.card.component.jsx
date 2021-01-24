import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ConfigDeptTable from "./dept.table.component";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Modal from '@material-ui/core/Modal';
import DeptAddForm from './dept.form';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table: {
        width: '100%',
        maxHeight: 650,
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

export default function ConfigDeptMainPage() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <DeptAddForm setOpen={setOpen} />
        </div>
    );

    return (
        <React.Fragment>
            <Grid container sm={6} xs={12} justify='space-between'>
                <Grid container item>
                    <Grid container justify="space-between" style={{ minWidth: '35em' }}>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <SupervisedUserCircleIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3" style={{ marginLeft: "0.2em" }}>
                                        Departments
                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleOpen} variant="contained" color="primary">
                                Add Department <AddIcon />
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ConfigDeptTable />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
