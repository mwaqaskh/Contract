import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./mocks";



import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/index';
import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById('root'));
