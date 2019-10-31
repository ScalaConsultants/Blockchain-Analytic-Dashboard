import React, { useState, useEffect } from 'react';

import AuthModalView from './AuthModal-view';

import { validation, rules } from './helpers';

import { AuthModalProps, User } from './types';

const AuthModal = ({
  onAuthUser,
  onAuthUserForgotPassword,
  auth
}: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [shouldSignUp, setShouldSignUp] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [formValidation, setFormValidation] = useState({
    email: {
      isValid: true,
      msg: '',
    },
    password: {
      isValid: true,
      msg: '',
    },
    touched: {
      email: false,
      password: false
    }
  });

  useEffect(() => {
    setOpen(prevState => prevState && !auth.isAuth);
  }, [auth.isAuth]);

  const handleOpen = () => setOpen(prevState => !prevState);

  const handleClose = () => {
    setOpen(prevState => !prevState);
    setForgotPassword(false);
    setRememberMe(true);
    setUser({
      email: '',
      password: ''
    });
    setFormValidation({
      email: {
        isValid: true,
        msg: '',
      },
      password: {
        isValid: true,
        msg: '',
      },
      touched: {
        email: false,
        password: false
      }
    })
  };

  const handleSwitchForms = () => setForgotPassword(prevState => !prevState);

  const handleRememberMe = () => setRememberMe(prevState => !prevState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { type } = event.target;
    const { value } = event.target;

    setUser(
      (prevState: User): User => {
        const userState = { ...prevState };
        //@ts-ignore
        userState[type] = value;
        return userState;
      }
    );
  };

  const onFocus = (type: string) => {
    const { email, password } = formValidation.touched;
    if (!email || !password) {
      setFormValidation(prevState => {
        const formState = { ...prevState };
        //@ts-ignore
        formState.touched[type] = true;
        return formState
      })
    }
  };

  const onBlur = (type: string) => {
    const { email, password } = formValidation.touched;
    if (email || password) {
      // @ts-ignore
      const validationData = validation(user[type], rules[type], type);

      setFormValidation(prevState => {
        const formState = { ...prevState };
        //@ts-ignore
        formState[type] = validationData;
        return formState;
      })
    }
  };

  const btnClick = (btn: boolean) => {
    const { email, password } = formValidation;
    if (email.isValid && password.isValid) {
      if (btn && shouldSignUp || !btn && !shouldSignUp) return onAuthUser(user.email, user.password, btn);
    }

    setShouldSignUp(prevState => !prevState);
  };

  const handleEmailFocus = () => onFocus('email');
  const handleEmailBlur = () => onBlur('email');
  const handlePasswordFocus = () => onFocus('password');
  const handlePasswordBlur = () => onBlur('password');
  const handleLogin = () => btnClick(false);
  const handleSignUp = () => btnClick(true);
  const handleForgotPassword = () => onAuthUserForgotPassword(user.email);

  return (
    <AuthModalView
      auth={auth}
      open={open}
      handleOpen={handleOpen}
      handleChange={handleChange}
      handleClose={handleClose}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      handleRememberMe={handleRememberMe}
      handleSwitchForms={handleSwitchForms}
      handleForgotPassword={handleForgotPassword}
      handleEmailFocus={handleEmailFocus}
      handleEmailBlur={handleEmailBlur}
      handlePasswordFocus={handlePasswordFocus}
      handlePasswordBlur={handlePasswordBlur}
      rememberMe={rememberMe}
      forgotPassword={forgotPassword}
      user={user}
      shouldSignUp={shouldSignUp}
      formValidation={formValidation}
    />
  );
};

export default AuthModal;