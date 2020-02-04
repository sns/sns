  
import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './service-worker';
import { App } from './app';

ReactGA.initialize('UA-149252883-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();