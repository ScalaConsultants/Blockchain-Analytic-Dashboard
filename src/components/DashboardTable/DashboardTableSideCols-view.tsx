import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardTableBlockchainCell from './DashboardTableBlockchainCell-view';
import DashboardTableConditionCell from './DashboardTableConditionCell-view';
import { Row } from './types';

const DashboardTableSideCols = (props: Row) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <DashboardTableBlockchainCell {...props.row} />
      </Grid>
      <Grid item xs={6}>
        <DashboardTableConditionCell />
      </Grid>
    </Grid>
  )
};

export default DashboardTableSideCols;