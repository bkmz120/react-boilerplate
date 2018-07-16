import React from 'react';
import { Provider } from 'react-redux';

import {store} from 'Store';
import './style.scss';

export const App = () => (
  <Provider store={store}>
    <div>Well, well, well... </div>
  </Provider>
)