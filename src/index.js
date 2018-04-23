import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchTodos } from './redux/actions'

let newStore = store()

newStore.dispatch(fetchTodos())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
