import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div>
			<div className="sections">
				<Navbar /> <Header /> <Skills /> <Experience /> <Projects /> <Contact />
			</div>
		</div>
	);
}

export default App;
