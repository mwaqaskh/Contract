import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';

import { theme, useStyle } from './styles';
import maTheme from "../../../../theme/"
export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={maTheme[theme.currentTheme]}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>

    </ThemeProvider>
  );
}
