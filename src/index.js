import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter } from "react-router-dom";

import './css/index.css';
import './css/global.css';

import Main from './components';


import * as serviceWorker from './lib/serviceWorker';
import configureStore from './redux/store';

let store = configureStore();

ReactDOM.render(

  <Provider store={store}>

    <BrowserRouter>
      <Main />
    </BrowserRouter>

  </Provider>

  , document.getElementById('root')

);

serviceWorker.unregister();