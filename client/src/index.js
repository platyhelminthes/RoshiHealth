import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<App />,
document.getElementById('root')
);
registerServiceWorker();

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
