import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { ChartDescriptionStyles } from './ChartDescription-styles';
import { ViewProps } from './types';

const ChartDescriptionView = ({ type, blockchain }: ViewProps) => {
  const classes: any = ChartDescriptionStyles();
  const classesDot = clsx([classes.dot, classes[type]])

  return (
      <Grid container spacing={1} alignItems="center" className={classes.root}>
        <Grid item xs={1}><div className={classesDot}></div></Grid>
        <Grid item xs={11} className={classes.type}>{`${type} volume`}</Grid>
        <Grid item xs={12} className={classes.block}>{blockchain}</Grid>
      </Grid>
  )
};

export default ChartDescriptionView;