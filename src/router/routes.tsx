import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {Container} from '@material-ui/core';
import DashboardView from '../components/DashboardView';
import DetailsView from '../components/DetailsView';
import WalletsList from '../components/WalletsList';
import TopBar from '../components/TopBar';
import Auth from '../components/Auth';
import AuthResetPassword from "../components/AuthResetPassword";
import getDefaultRoute from '../helpers/defaultRoute';

export default (): React.ReactElement => {
  const defaultRoute = getDefaultRoute();

  return (
      <Auth>
        <Container>
          <TopBar/>
          <Switch>
            <Route
                exact
                path="/wallet/:walletSource/:walletHash/:groupBy/:blockchains/:limit/:from/:to"
                component={DetailsView}
            />
            <Route exact path="/:groupBy/:blockchains/:limit/:from/:to" component={DashboardView}/>
            <Route exact path="/password/reset/:id/:token" component={AuthResetPassword}>
            </Route>
            <Route exact path="/wallets-list" component={WalletsList}/>
            <Route exact path="/">
              <Redirect to={defaultRoute}/>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </Container>
      </Auth>
  );
};
