import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import { HashRouter } from "react-router-dom";
import App from './App';
import Store  from './ContextStore'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
      <HashRouter>
      <Store>
      	<App />
      	</Store>
      </HashRouter>, 
      document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
