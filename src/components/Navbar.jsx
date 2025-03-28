import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import Typewriter from 'typewriter-effect';
import { socials } from '../constants';
const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [text, setText] = useState(''); // Aktualny tekst wpisywany
	const [index, setIndex] = useState(0); // Aktualny tekst wpisywany
	const fullText = 'pozdal.dev'; // Pełna nazwa strony

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full  flex items-center py-5 fixed top-0 z-20 nav-gradient ${
				scrolled ? 'bg-primary' : 'bg-transparent'
			}`}
		>
			<div className="w-full  flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<p className=" ">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('pozdal.dev')
									.start()
									.pauseFor(5000);
							}}
							options={{
								wrapperClassName:
									'text-white logo text-[18px] font-bold cursor-pointer ',
								loop: true,
							}}
						/>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10 justify-center items-center ">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? 'font-bold' : 'font-bold'
							} hover:text-white text-secondary text-[18px] font-medium cursor-pointer transition-all duration-300`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
					<li className="flex gap-2">
						{socials.map((social, index) => (
							<a
								href={social.url}
								rel="noreferrer"
								target="_blank"
								key={index}
							>
								<div
									className="w-8 h-8 cursor-pointer hover:text-black hover:bg-secondary bg-black
					 rounded-full text-secondary border-2 border-secondary flex justify-center items-center transition duration-300 hover:shadow-md hover:shadow-secondary/50"
								>
									{social.icon}
								</div>
							</a>
						))}
					</li>
					<li className="text-gray-200 text-sm font-medium cursor-pointer flex items-center gap-2 border-[1px] px-6 py-3 tracking-wide hover:text-secondary hover:border-secondary transition-colors duration-300">
						<a href="#contact">Let's Connect</a>
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title
											? 'text-white'
											: 'text-secondary'
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
