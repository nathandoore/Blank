import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import {store} from './store/store';
import {Provider} from 'react-redux';
import './assets/index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
