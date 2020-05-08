import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
  ReactDOM.render(
      <App />,
      document.getElementById('root') as HTMLElement
  );
  serviceWorker.register();
},DO_NOT_LOGIN);