import React from 'react';
import Routes from '../Routes';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default Root;