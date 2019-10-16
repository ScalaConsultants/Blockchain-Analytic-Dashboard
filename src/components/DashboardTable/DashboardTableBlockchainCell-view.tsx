import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useDashboardTableStyles } from './DashboardTable-styles';
import { BlockchainCell } from './types'

const DashboardTableBlockchainCell = ({ name, icon }: BlockchainCell) => {
  const classes = useDashboardTableStyles();
  return (
    <Grid container alignItems="center" justify="flex-start">
      <Grid item xs={3}>
        <img src={`./icons/${icon}.png`} className={classes.img} />
      </Grid>
      <Grid item xs={9}>
        {name}
      </Grid>
    </Grid>
  )
};

export default DashboardTableBlockchainCell;