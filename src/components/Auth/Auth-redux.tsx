import React, {PropsWithChildren, ReactPropTypes} from "react";
import { useDispatch } from 'redux-react-hook';

import authActions from '../../store/actions/auth';
import Auth from "./Auth-container";

const AuthRedux = (props: PropsWithChildren<any>) => {

    const dispatch = useDispatch();

    const authCheck = () => dispatch(authActions.authCheck());

    return <Auth authCheck={authCheck} children={props.children}/>
};

export default AuthRedux;