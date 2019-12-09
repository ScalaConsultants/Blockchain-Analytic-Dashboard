import React from 'react';
import Grid from '@material-ui/core/Grid';
import Legend from '../Legend';
import { useDashboardTableStyles } from './DashboardTable-styles';

import SwitchButton from '../SwitchButton';
 
const DashboardTableHeader = ({ currency, actions }: any) => {
  const classes = useDashboardTableStyles();

  const [switchState, setSwitchState] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSwitchState(event.target.checked);
    console.log('change')
    if (currency) {
      actions.setCurrencyOff();
      return;
    }
    actions.setCurrencyOn();
  }

  return (
    <Grid container alignItems="center" className={classes.header}>
      <Grid item xs={3}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            Blockchain
          </Grid>
          <Grid item xs={6}>
            Condition
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container alignItems="center">
        <Grid item xs={1}>
          Value
        </Grid>
        <Grid item xs={2}>
        <div>HELLO</div>
          <SwitchButton 
            labelLeft={'$'}
            labelRight={'%'}
            switchState={currency}
            handleChange={handleChange}
            dashboaradSwitch={true}
          />
        </Grid>
        <Grid item xs={8}>
          <Legend />
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardTableHeader;