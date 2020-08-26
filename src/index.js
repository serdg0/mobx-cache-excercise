import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountProvider from './countContext';

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById('root')
);
