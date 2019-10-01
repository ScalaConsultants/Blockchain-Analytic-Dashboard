import React from 'react';
import { useMappedState } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';


const BarChartRedux = () => {

    const mapState = (state: any): any => ({
        wallets: state.ethereum.wallets
    });

    const { wallets } = useMappedState(mapState);


    return (
        <BarChartContainer wallets={wallets} width={2000} />
    )
}

export default BarChartRedux;