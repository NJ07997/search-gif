import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider }from 'react-redux';
import configStore from './config/configStore';
import App from './App';

require('dotenv').config();

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
     <Router>
       <App />
     </Router>
  </Provider>,
  document.getElementById('root'),
);