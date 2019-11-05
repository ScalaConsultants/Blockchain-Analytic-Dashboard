import { makeStyles } from '@material-ui/core/styles';
import { SECONDARY_BG_COLOR, DECOR_COLOR } from '../../../theme/constants';
import { ExtendedTheme } from '../../../types';

export const TimePeriodStyles = {
  root: {
    color: SECONDARY_BG_COLOR,
    height: 5,
    width: '90%',
    padding: '6px 0',
    display: 'block',
    margin: '0 auto'
  },

  thumb: {
    height: 15,
    width: 15,
    background: DECOR_COLOR,
    border: '2px solid currentColor',
    marginTop: -4,
    marginLeft: -12,

    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },

  active: {},

  valueLabel: {
    left: 'calc(-50% + 4px)',
  },

  track: {
    height: 5,
    borderRadius: 4,
  },

  rail: {
    height: 5,
    borderRadius: 4,
  }
}

export const useTimeFilterStyles = makeStyles((theme: ExtendedTheme) => ({
  container: {
    border: '1px solid' + theme.constants.SECONDARY_BG_COLOR,
    maxWidth: '230px',
    margin: '10px 4px',
    borderRadius: '4px',
  },

  header: {
    background: theme.constants.SECONDARY_BG_COLOR,
    fontSize: '0.7rem',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    color: theme.constants.GREY_TEXT_COLOR,
    padding: '5px 9px'
  },

  right: {
    textAlign: 'right'
  },

  timeField: {
    fontSize: '0.8rem',
    textAlign: 'center'
  },

  body: {
    padding: '5px 9px',
    fontSize: '0.7rem',
    color: '#5975FF'
  }
}));