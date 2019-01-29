import React from 'react';
import ReactDOM from 'react-dom';
// import HashRouter from react-router-dom
import {HashRouter} from 'react-router-dom';
import './main.css';
import App from './App';

// Wrap App in HashRouter// Wrap App in HashRouter
ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
, document.getElementById('root'));
