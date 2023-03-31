import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { store } from './store';
import { Provider } from 'react-redux';
import App from 'pages/app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
