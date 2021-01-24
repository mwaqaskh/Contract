import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MidPage from "./region_config/region.card.component";
import Grid from "@material-ui/core/Grid";
import ConfigBUMainPage from './bu_config/bu.card.component';
import ConfigDeptMainPage from './dept_config/dept.card.component';
import ConfigDivMainPage from './div_config/div.card.component';
import ConfigTagMainPage from './tag_config/tag.card.component';
import ConfigSiteMainPage from './site_config/site.card.component';

const useStyles = makeStyles({
    page: {
        marginBottom: '3em',
    },
});

export default function ConfigMainPage() {
    const classes = useStyles();

    return (
    <React.Fragment>
        <Grid container>
            <Grid item sm={6} xs={12} className={classes.page}><MidPage /></Grid>
            <Grid item sm={6} xs={12} className={classes.page}><ConfigBUMainPage /></Grid>
            <Grid item sm={6} xs={12} className={classes.page}><ConfigDeptMainPage /></Grid>
            <Grid item sm={6} xs={12} className={classes.page}><ConfigDivMainPage /></Grid>
            <Grid item sm={6} xs={12} className={classes.page}><ConfigTagMainPage /></Grid>
            <Grid item sm={6} xs={12} className={classes.page}><ConfigSiteMainPage /></Grid>
        </Grid>
    </React.Fragment>
    );
}