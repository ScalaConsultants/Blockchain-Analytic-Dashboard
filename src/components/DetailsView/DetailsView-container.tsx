import React from 'react';

import DetailsView from './DetailsView-view';
import { DetailsContainerProps, Wallet } from './types';

const DetailsViewContainer = (props: DetailsContainerProps) => {
    const {
        email,
        from,
        to,
        walletHash,
        wallets,
        walletSource
    } = props;

    const blockchainMap: Record<string, string> = {
        'XTZ': 'tezos',
        'ETH': 'ethereum'
    };

    const wallet = wallets[walletSource].length && wallets[walletSource]
        .find((wallet: Wallet) => wallet.walletHash === walletHash);

    const id: string = walletHash && `${Math.floor(Math.random() * (30 - 1) + 1)}`;
    const days = (parseInt(to) - parseInt(from)) / (1000*60*60*24);
    const zoom = days > 1 ? '7 days' : '1 day';
    const title = wallet.title || 'Title';
    const description = wallet.description || 'This wallet belongs to market';
    const type = wallet.type || 'market';
    const blockchain = blockchainMap[walletSource];

    const toProps = {
        ...props,
        blockchain,
        title,
        description,
        email,
        id,
        type,
        zoom
    };

    return <DetailsView {...toProps} />;
};

export default DetailsViewContainer;
