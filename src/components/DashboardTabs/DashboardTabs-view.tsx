import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { useDashboardStyles } from './DashboardTabs-styles';
import { ViewProps } from './types';

const DashboardTabsView = ({ tabs }: ViewProps) => {
  const classes = useDashboardStyles();
  const rootClasses = clsx([classes.fonts, classes.grey, classes.margin]);

  return (
    <Grid container className={rootClasses} spacing={2}>
      <Grid item xs={3}>
        <Grid container justify="center">
          {tabs}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardTabsView;
