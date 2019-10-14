import React from 'react';
import clsx from 'clsx';
import DashboardTableHeader from './DashboardTableHeader-view';
import DashboardTableBody from './DashboardTableBody-view';
import { useDashboardTableStyles } from './DashboardTable-styles';
import { Table } from './types';
 
const DashboardTableView = ({ rows }: Table) => {
  const classes = useDashboardTableStyles();
  const rootClasses = clsx([classes.fonts, classes.grey]);
  return (
    <div className={rootClasses}>
      <DashboardTableHeader />
      <DashboardTableBody rows={rows}/>
    </div>
  )
};

export default DashboardTableView;