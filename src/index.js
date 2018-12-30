import React from 'react';
import ReactDOM from 'react-dom';

import { unregister as unregisterSW } from './kernel/service-worker';
import { App } from './components';

unregisterSW();

ReactDOM.render(<App />, document.getElementById('root'));
