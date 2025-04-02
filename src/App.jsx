import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, Tech, Projects, Contact } from './components';
import Education from './components/Education';
import Lottie from 'lottie-react';
import { Animation } from './assets';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import Hotjar from '@hotjar/browser';
function App() {
	const siteId = 5358664;
	const hotjarVersion = 6;

	Hotjar.init(siteId, hotjarVersion);
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				{/* <div className=" bg-hero-pattern bg-fixed bg-cover  bg-no-repeat bg-center"> */}
				<Lottie
					animationData={Animation}
					className="bg-fixed bg-cover w-full fixed opacity-25 grayscale  "
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
