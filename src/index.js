import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

import GeneralProvider from '../src/context/GeneralContext';

axios.defaults.baseURL = 'https://locallhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.params  = {
    user_id: '',
    token:'',
};
// axios.defaults.headers.common['Authorization'] = 'Auth Token';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GeneralProvider> */}
          <App />
    {/* </GeneralProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
