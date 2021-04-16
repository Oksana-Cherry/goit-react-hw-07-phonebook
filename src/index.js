import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
//import { store, persistor } from './redux/store';
import store from './redux/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <App />
      {/*</Provider></PersistGate>*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
