import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import { applyMiddleware } from 'redux';
// import { createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import moduleName from 'module'
// import { Provider } from 'react-redux'

// const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
