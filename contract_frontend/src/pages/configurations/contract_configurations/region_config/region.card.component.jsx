import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ConfigTable from "./region.table.component";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import PublicIcon from "@material-ui/icons/Public";
import Modal from '@material-ui/core/Modal';
import RegionAddForm from './region.form'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid grey',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
    table: {
        minWidth: 650,
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
        border: '0.5px solid #fff',
    };
}

export default function ConfigMainPage() {
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
            <RegionAddForm setOpen={setOpen} />
        </div>
    );

    return (
        <React.Fragment>
            <Grid container sm={6} xs={12}>
                <Grid container item>
                    <Grid container justify="space-between" style={{ minWidth: '35em' }}>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <PublicIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3" style={{ marginLeft: "0.2em" }}>
                                        Regions
                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleOpen} variant="contained" color="primary">
                                Add Regions <AddIcon />
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
                    <ConfigTable />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
