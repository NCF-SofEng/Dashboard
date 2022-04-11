import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';

import Dashboard from './components/Dashboard';
import Chatboard from './components/Chatboard';
import About from './components/About';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* BrowserRouter allows us to render components based on the url */}
		<BrowserRouter>
			{/* List of links for testing */}
			<nav>
				<ul>
					{/* Links associate some text with a url path */}
					<li><Link to="/">Dashboard</Link></li>
					<li><Link to="/chatboard">Chatboard</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</nav>
			{/* Collection of routes that associate url paths with jsx elements */}
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="chatboard" element={<Chatboard />} />
				<Route path="about" element={<About />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)