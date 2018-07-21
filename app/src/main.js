import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import App from './app.js';
import reducer from './reducers/index.js';

const store = createStore(reducer,applyMiddleware(logger));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app-container')
)