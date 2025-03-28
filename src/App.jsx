import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, Tech, Projects, Contact } from './components';
import Education from './components/Education';
function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className=" bg-hero-pattern bg-fixed bg-cover  bg-no-repeat bg-center">
					<Navbar />
					<Hero />

					<About />
					<Tech />

					<Education />

					<Projects />
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
