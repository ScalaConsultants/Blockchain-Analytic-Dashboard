import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

import AuthModal from '../AuthModal';
import UserMenu from '../UserMenu';

import { useTopBarStyles } from './TopBar-styles';
import useRules from '../hooks/Rules';

const TopBar = () => {
  const { PUBLIC_URL } = process.env;
  const classes = useTopBarStyles();
  const classesLogo = clsx([classes.logo, classes.flex]);
  const { editOwnWallet } = useRules();
  
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
          <div className={classesLogo}>
            <Link to={'/'} className={classes.link}>
              <img src={`${PUBLIC_URL}/icons/logo.png`} alt="logo" className={classes.img} />
            </Link> 
          </div>
        <AuthModal />
        {editOwnWallet && <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
