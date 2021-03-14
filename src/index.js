import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/Application';
import {store} from "./redux/store";
import {Provider} from "react-redux";




ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Application />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
