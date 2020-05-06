import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './index.scss';

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.querySelector('#root'),
);