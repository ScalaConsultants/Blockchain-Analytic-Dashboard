import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useInputStyles, useLabelStyles, useModalStyles } from './AuthModal-styles';

import { AuthModalViewProps } from './types';

const AuthModalLoginRegister = (props: AuthModalViewProps) => {
  const {
    handleChange,
    handleLogin,
    handleSignUp,
    handleSwitchForms,
    handleEmailFocus,
    handleEmailBlur,
    handlePasswordFocus,
    handlePasswordBlur,
    user = { email: '', password: '' },
    shouldSignUp = false,
    formValidation = {
      email: {
        isValid: true
      },
      password: {
        isValid: true
      }
    }
  } = props;

  const classesModal = useModalStyles();
  const classesInput = useInputStyles();
  const classesLabel = useLabelStyles();
  const classesButtons: string = clsx([classesModal.flex, classesModal.buttons]);

  const classesForgotPassword: string = clsx([classesModal.cursor, classesModal.font, classesModal.marginLeftAuto]);

  const buttons: React.ReactElement[] = [
    <Button onClick={handleLogin} key="login">Login</Button>,
    <Button onClick={handleSignUp} key="signup">Sign up</Button>
  ];

  if (shouldSignUp) buttons.reverse();

  return (
    <form noValidate className={classesModal.form}>
      <TextField
        InputProps={{ classes: classesInput, disableUnderline: true }}
        InputLabelProps={{ classes: classesLabel }}
        className={classesModal.textField}
        error={!formValidation.email.isValid}
        variant="filled"
        label="Email"
        id="auth-email"
        type="email"
        value={user.email}
        onChange={handleChange}
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <TextField
        InputProps={{ classes: classesInput, disableUnderline: true }}
        InputLabelProps={{ classes: classesLabel }}
        className={classesModal.textField}
        error={!formValidation.password.isValid}
        variant="filled"
        label="Password"
        id="auth-password"
        type="password"
        value={user.password}
        onChange={handleChange}
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
      />
      {!shouldSignUp && <Grid container className={classesModal.options}>
        <Grid item className={classesForgotPassword} onClick={handleSwitchForms}>
          Forgot password?
        </Grid>
      </Grid>}
      <div className={classesButtons}>
        {buttons}
      </div>
    </form>
  );
};

export default AuthModalLoginRegister;
