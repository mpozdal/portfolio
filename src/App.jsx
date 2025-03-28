import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, Tech, Projects, Contact } from './components';
import Education from './components/Education';
import Lottie from 'lottie-react';
import { Animation } from './assets';
function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				{/* <div className=" bg-hero-pattern bg-fixed bg-cover  bg-no-repeat bg-center"> */}
				<Lottie
					animationData={Animation}
					className="bg-fixed bg-contain bg-no-repeat bg-center fixed opacity-15 grayscale  "
				/>
				<Navbar />
				<Hero />

				<About />
				<Tech />

				<Education />

				<Projects />
				<Contact />
			</div>
			{/* </div> */}
		</BrowserRouter>
	);
}

export default App;
