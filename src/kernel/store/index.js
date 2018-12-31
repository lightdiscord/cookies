import { createStore } from 'redux';

import reducers from './reducers';

const initialState = {
    cookie: {
        clicks: 0
    }
};

export const store = createStore(
    reducers,
    initialState
);

