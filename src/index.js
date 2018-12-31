import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './kernel/store';
import { unregister as unregisterSW } from './kernel/service-worker';
import { App } from './components';

import './kernel/ipfs'

unregisterSW();

const element = (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
