import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './css/index.css';
import './css/global.css';

import Main from './components';


import * as serviceWorker from './lib/serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();