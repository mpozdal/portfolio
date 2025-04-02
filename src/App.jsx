import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, Tech, Projects, Contact } from './components';
import Education from './components/Education';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { Animation } from './assets';
import 'custom-cursor-react/dist/index.css';
import Hotjar from '@hotjar/browser';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
function App() {
	const siteId = 5358664;
	const hotjarVersion = 6;

	const [_, setHotjarEnabled] = useState(false);

	useEffect(() => {
		if (getCookieConsentValue('hotjar-consent') === 'true') {
			Hotjar.init(siteId, hotjarVersion);
			setHotjarEnabled(true);
		}
	}, []);
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
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
			<CookieConsent
				location="bottom"
				buttonText="Accept"
				declineButtonText="Reject"
				enableDeclineButton
				cookieName="hotjar-consent"
				expires={365}
				onAccept={() => {
					Hotjar.init(siteId, hotjarVersion);
					setHotjarEnabled(true);
				}}
				buttonStyle={{
					background: '#749293',
					color: 'white',
					fontWeight: 'bolder',
				}}
				declineButtonStyle={{
					background: 'red',
					opacity: 0.8,
					color: 'white',
					fontWeight: 'bolder',
					textAlign: 'center',
				}}
				containerClasses="bg-gray-900 opacity-90 text-white text-center"
			>
				🍪 We use cookies to analyze website traffic. By clicking
				"Accept," you consent to this.
			</CookieConsent>
		</BrowserRouter>
	);
}

export default App;
