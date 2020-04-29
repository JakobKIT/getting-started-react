import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import img from './assets/react-part1.png';

const App = () => {
  return (
    <div>
      <img src={img} />
      <div>Hello World!</div>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.querySelector('#root'),
);