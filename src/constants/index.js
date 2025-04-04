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
		id: 'education',
		title: 'Education',
	},
	{
		id: 'projects',
		title: 'Projects',
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
		name: 'Breezy',
		description: `BreezyWeatherApp is a weather application that allows users to check the weather forecast for selected cities. It is built using React and uses the OpenWeather API to fetch weather data. The app provides users with current weather conditions, temperature, and other relevant information for any city. The interface is clean and easy to use, offering a smooth experience for checking the weather.`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'express.js',
				color: 'green-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: '',
		source_code_link: 'https://github.com/mpozdal/breezy-frontend',
	},
	{
		name: 'CertifyLite',
		description: `An application that leverages blockchain
technology to ensure file authenticity by
storing their hashes on the blockchain.
Users can verify the integrity and
originality of a file by comparing its hash
with the one recorded on the blockchain.
This approach guarantees tamper-proof
validation, providing a secure and
transparent method for file verification.`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'solidity',
				color: 'green-text-gradient',
			},
			{
				name: 'blockchain-sepolia',
				color: 'pink-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: 'jobit',
		source_code_link: 'https://github.com/mpozdal/CertifyLite',
	},

	{
		name: 'Flok e-shop ',
		description: `A modern e-commerce platform based on Shopify with an intuitive interface, secure payments.`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'postgresql',
				color: 'green-text-gradient',
			},
			{
				name: 'google-dialog-flow',
				color: 'pink-text-gradient',
			},
		],
		image: '',
		source_code_link: 'https://github.com/mpozdal/io-motto',
	},
	{
		name: 'Motto',
		description: `An mobile application for ordering
	personalized coffee for pickup within a
	coffee shop network.`,
		tags: [
			{
				name: 'react-native',
				color: 'blue-text-gradient',
			},
			{
				name: 'aws-app-sync',
				color: 'green-text-gradient',
			},
			{
				name: 'dynamodb',
				color: 'pink-text-gradient',
			},
		],
		image: '',
		source_code_link: 'https://github.com/mpozdal/io-motto',
	},
	{
		name: 'RestaurantMate',
		description: `RestaurantMate_AI is an intelligent table reservation bot built with Dialogflow and powered by a PostgreSQL database. The app allows quick and convenient restaurant bookings while sending reservation details to the provided email address.`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'postgresql',
				color: 'green-text-gradient',
			},
			{
				name: 'google-dialog-flow',
				color: 'pink-text-gradient',
			},
		],
		image: '',
		source_code_link: 'https://github.com/mpozdal/restaurantmate_ai',
	},
	{
		name: 'Skyquest',
		description: `A web application that displays flights,
	restaurants and attractions in specific
	cities with various filter options.`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'java-spring-boot',
				color: 'green-text-gradient',
			},
			{
				name: 'postgresql',
				color: 'pink-text-gradient',
			},
			{
				name: 'jwt',
				color: 'pink-text-gradient',
			},
		],
		image: '',
		source_code_link: 'https://github.com/mpozdal/ztpai-SkyQuest',
	},
];

export { technologies, projects, socials };
