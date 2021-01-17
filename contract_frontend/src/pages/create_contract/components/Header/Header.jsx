import React from 'react';

import { Typography, Grid } from "@material-ui/core";
import useStyles from './styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export default function Header() {
  const classes = useStyles();

  return (

    <Grid container alignItems="center" style={{ marginBottom: "0em" }}>
      <Grid item style={{ marginRight: "0.5em" }}>
        <LibraryBooksIcon color='primary' fontSize='large' />
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          style={{ fontWeight: "bolder" }}
        >
          Create New Contract
          </Typography>
      </Grid>
    </Grid>



  );
}
