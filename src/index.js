import React from 'react';
import ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './global.css';
import {ResultContextProvider} from './contexts/ResultContextProvider'
// ReactDOM.render(
// 	<ResultContextProvider>
// 		<Router>
// 			<App />
// 		</Router>
// 	</ResultContextProvider>, 
	
// 	document.getElementById('root'))
	const container = document.getElementById('root');
	const root = createRoot(container); // createRoot(container!) if you use TypeScript
	root.render(<ResultContextProvider>
		<Router>
			<App />
		</Router>
	</ResultContextProvider>);