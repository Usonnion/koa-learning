import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app.js'
import configureStore from './common/store/configureStore.js';

const store = configureStore(window.REDUX_STATE);

ReactDOM.render(
  (<BrowserRouter>
  	<Provider store={store}>
  		  <Route path="/" component={App} />
  	</Provider>
  </BrowserRouter>),
  document.getElementById('root')
);
