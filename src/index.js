import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';
import Toggle from './components/Toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<Toggle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
