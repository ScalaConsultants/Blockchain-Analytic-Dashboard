import { makeStyles } from '@material-ui/core/styles';

// @ts-ignore
const useLoaderDefaultStyles = (fullPage: boolean | undefined, containerClass: object | undefined = {}) => {
  const positionTypeContainer = fullPage ? 'fixed' : 'absolute';
  const paddingContainer = fullPage ? 'none' : '50px';
  //@ts-ignore
  const createStyles = makeStyles(() => ({
    containerBase: {
      alignItems: 'center',
      backgroundColor: 'rgba(37, 45, 72, 0.8)',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      position: positionTypeContainer,
      top: 0,
      width: '100%'
    },
    containerAdditional: {
      padding: paddingContainer,
      ...containerClass
    },
    root: {
      color: 'rgba(120, 204, 51, .5)'
    }
  }));

  return createStyles();
};

export default useLoaderDefaultStyles;
