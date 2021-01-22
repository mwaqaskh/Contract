import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MidPage from "./region_config/region.card.component";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function ConfigMainPage() {
    const classes = useStyles();

    return <MidPage />;
}