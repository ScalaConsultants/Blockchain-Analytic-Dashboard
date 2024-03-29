import React from 'react';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import EditWalletModalStyles from './EditWalletModal-styles';
import { ViewProps } from './types';

const EditWalletModalView = ({
   open,
   handleOpen,
   handleClose,
   handleUpdate,
   handleChange,
   handleTitleChange,
   changeType,
   id,
   address,
   description,
   title,
   type,
   canEdit
}: ViewProps): JSX.Element => {

  const { PUBLIC_URL } = process.env;

  const classes = EditWalletModalStyles();
  const classesPaper = clsx([classes.paper, classes.fonts, classes.grey]);
  const classesTextarea = clsx([classes.textarea, classes.fonts, classes.white]);
  const classesTitleField = clsx([classes.fonts, classes.white, classes.titleField]);
  const classesChip = clsx([classes.chip, classes.background]);
  const classesEditWalletButton = clsx([classes.editButton, classes.fonts, classes.grey, classes.background, !canEdit && classes.disableBtn]);
  const classesFirstButton = clsx([classes.button, classes.fonts, classes.buttonFirst, classes.white]);
  const classesSecondButton = clsx([classes.button, classes.fonts]);
  const classesMarket = clsx(classesChip, {
      [classes.market]: type === 'market'
  });
  const classesPrivate = clsx(classesChip, {
      [classes.private]: type === 'private'
  });
  const classesDapp = clsx(classesChip, {
      [classes.dapp]: type === 'dapp'
  });
  const classesFraud = clsx(classesChip, {
      [classes.fraud]: type === 'fraud'
  });

  const allowOpen = canEdit ? handleOpen : () => {};

  const generateEditButton = (): JSX.Element => (
    <Button
      variant="outlined"
      color="inherit"
      className={classesEditWalletButton}
      onClick={allowOpen}
    ><img src={`${PUBLIC_URL}/icons/wallet.png`} style={{ width: '13px', marginRight: '5px' }} alt="Wallet icon"/>
      edit
    </Button>
  );

  return (
    <>
      { canEdit 
        ? generateEditButton() 
        : <Tooltip title='Please sign/log in' placement="bottom">{ generateEditButton() }</Tooltip>
      }
      <Modal
        aria-labelledby="edit-wallet-modal-title"
        aria-describedby="edit-wallet-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classesPaper}>
            <Grid container alignItems="center">
              <h4 id="edit-wallet-modal-title" className={classes.white}>
                  Edit Wallet
              </h4>
              <CloseIcon className={classes.close} viewBox="0 0 40 20" onClick={handleClose} />
            </Grid>
            <Divider
              /* eslint-disable-next-line react/jsx-boolean-value */
              light={true}
              className={classes.background}
            />
            <Grid container alignItems="center" className={classes.marginTop15}>
              <Grid item xs={3}>ID</Grid>
              <Grid item xs={9} className={classes.white}>{id}</Grid>
            </Grid>
            <Grid container alignItems="center" className={classes.marginTop15}>
              <Grid item xs={3}>Address</Grid>
              <Grid item xs={9} className={classes.white}>{address}</Grid>
            </Grid>
            <Grid container className={classes.marginTop30}>
              <Grid item xs={12}>Select wallet type:</Grid>
              <Grid item className={classesMarket} onClick={changeType} data-name="market">Market</Grid>
              <Grid item className={classesPrivate} onClick={changeType} data-name="private">Private</Grid>
              <Grid item className={classesDapp} onClick={changeType} data-name="dapp">DAPP</Grid>
              <Grid item className={classesFraud} onClick={changeType} data-name="fraud">Fraud</Grid>
            </Grid>
            <Grid container className={classes.marginTop30}>
              <Grid item xs={12}>Title</Grid>
              <Grid item xs={12}>
                <TextField
                  /* eslint-disable-next-line react/jsx-boolean-value */
                  fullWidth={true}
                  id="edit-wallet-modal-title"
                  className={classes.description}
                  defaultValue={title}
                  onChange={handleTitleChange}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'edit-wallet-modal-title', className: classesTitleField }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.marginTop30}>
              <Grid item xs={12}>Description</Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  /* eslint-disable-next-line react/jsx-boolean-value */
                  fullWidth={true}
                  id="edit-wallet-modal-description"
                  className={classes.description}
                  defaultValue={description}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'edit-wallet-modal-description', className: classesTextarea }}
                />
              </Grid>
            </Grid>
            <Grid
              alignItems="center"
              className={classes.marginTop15}
              container
              direction="row"
              justify="center"
              spacing={2}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classesFirstButton}
                  onClick={handleUpdate}
                >
                  OK
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classesSecondButton}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default EditWalletModalView;
