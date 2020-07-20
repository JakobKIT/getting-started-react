import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import store from './store/configureStore';
import Root from './containers/Root';
import './index.scss';

ReactDOM.render(
  <StrictMode>
    <Root store={store} />
  </StrictMode>,
  document.querySelector('#root'),
);