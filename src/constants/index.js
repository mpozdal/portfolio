import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	figma,
	docker,
	threejs,
	net,
	rabbit,
	azure,
	sql,
	web3,
} from '../assets';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'experience',
		title: 'Experience',
	},
	{
		id: 'education',
		title: 'Education',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
];

const experiences = [
	{
		role: 'Junior Software Engineer',
		company: 'Comarch',
		date: 'Apr 2025 - Present',
		icon: '💼',
		description:
			'Building and maintaining enterprise software with .NET and Angular in a production environment.',
	},
];
const socials = [
	{
		icon: <FaGithub />,
		url: 'https://github.com/mpozdal',
	},
	{
		icon: <FaLinkedinIn />,
		url: 'https://www.linkedin.com/in/michał-pożdał-17a7b12a2/',
	},
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: '.net',
		icon: net,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux',
		icon: redux,
	},
	{
		name: 'Azure',
		icon: azure,
	},
	{
		name: 'SQL',
		icon: sql,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'RabbitMQ',
		icon: rabbit,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'docker',
		icon: docker,
	},
	{
		name: 'web3.js',
		icon: web3,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},

	{
		name: 'Three JS',
		icon: threejs,
	},

	{
		name: 'figma',
		icon: figma,
	},

	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
];

const projects = [
	{
		name: 'ZKML Credit Classifier',
		description: `Master's thesis project demonstrating Zero-Knowledge Machine Learning (ZKML) for credit scoring. A logistic regression model runs locally while Groth16 proofs are generated in the browser with SnarkJS and verified on Sepolia — sensitive financial inputs never leave the client.`,
		tags: [
			{ name: 'circom', color: 'blue-text-gradient' },
			{ name: 'snarkjs', color: 'green-text-gradient' },
			{ name: 'solidity', color: 'green-text-gradient' },
			{ name: 'python', color: 'pink-text-gradient' },
		],
		source_code_link: 'https://github.com/mpozdal/zkml-project',
	},
	{
		name: 'Travel Trace',
		description: `Full-stack travel planning application with an Angular frontend and a .NET REST API backend. Users can organize trips, manage itineraries, and interact with a clean, responsive UI backed by structured server-side logic.`,
		tags: [
			{ name: 'angular', color: 'blue-text-gradient' },
			{ name: '.net', color: 'green-text-gradient' },
			{ name: 'typescript', color: 'green-text-gradient' },
			{ name: 'rest-api', color: 'pink-text-gradient' },
		],
		source_code_link: 'https://github.com/mpozdal/travel-trace-web',
	},
	{
		name: 'Blackout Chat',
		description: `Real-time chat application built with Angular on the frontend and ASP.NET Core on the backend. Focused on responsive UI patterns, API integration, and a smooth messaging experience across the stack.`,
		tags: [
			{ name: 'angular', color: 'blue-text-gradient' },
			{ name: 'asp.net-core', color: 'green-text-gradient' },
			{ name: 'signalr', color: 'pink-text-gradient' },
			{ name: 'typescript', color: 'pink-text-gradient' },
		],
		source_code_link: 'https://github.com/mpozdal/blackout-chat-frontend',
	},
	{
		name: 'Two-Factor Auth',
		description: `Authentication system with TOTP-based two-factor login. Angular SPA paired with a .NET API — covering secure credential flows, token handling, and a practical implementation of multi-factor security.`,
		tags: [
			{ name: 'angular', color: 'blue-text-gradient' },
			{ name: '.net', color: 'green-text-gradient' },
			{ name: 'jwt', color: 'pink-text-gradient' },
			{ name: 'security', color: 'pink-text-gradient' },
		],
		source_code_link: 'https://github.com/mpozdal/2fa_auth_web',
	},
	{
		name: 'Breezy',
		description: `Weather application for browsing current conditions and a 7-day forecast for selected cities. React frontend with an Express backend consuming the OpenWeather API — clean UI, straightforward data flow, and a smooth browsing experience.`,
		tags: [
			{ name: 'react', color: 'blue-text-gradient' },
			{ name: 'express.js', color: 'green-text-gradient' },
			{ name: 'rest-api', color: 'green-text-gradient' },
			{ name: 'tailwind', color: 'pink-text-gradient' },
		],
		source_code_link: 'https://github.com/mpozdal/breezy-frontend',
	},
	{
		name: 'CertifyLite',
		description: `Decentralized app for anchoring file hashes on-chain so anyone can verify integrity without exposing the original file. React frontend with Solidity smart contracts deployed on Sepolia for tamper-proof, transparent validation.`,
		tags: [
			{ name: 'react', color: 'blue-text-gradient' },
			{ name: 'solidity', color: 'green-text-gradient' },
			{ name: 'sepolia', color: 'pink-text-gradient' },
			{ name: 'web3', color: 'pink-text-gradient' },
		],
		source_code_link: 'https://github.com/mpozdal/CertifyLite',
	},
];

export { technologies, projects, socials, experiences };
