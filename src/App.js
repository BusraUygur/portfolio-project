import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
	return (
		<div>
			<div className="sections">
				<Navbar /> <Header /> <Skills /> <Experience />
			</div>
		</div>
	);
}

export default App;
