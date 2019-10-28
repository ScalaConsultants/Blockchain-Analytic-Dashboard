import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import { dashboardSwitchStyles, wojtekZMalejSwitchStyles } from './SwitchButton-styles';
import { SwitchButtonProps } from './types';

const SwitchButton = (props: SwitchButtonProps) => {

  const SwitchStyle = props.dashboaradSwitch ? withStyles(dashboardSwitchStyles)(Switch) :  withStyles(wojtekZMalejSwitchStyles)(Switch);

  return (
    <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{props.labelLeft}</Grid>
          <Grid item>
            <SwitchStyle
              checked={props.switchState}
              onChange={props.handleChange}
            />
          </Grid>
          <Grid item>{props.labelRight}</Grid>
        </Grid>
      </Typography>
  );
}

export default SwitchButton;
