import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socials } from '../constants';
import { Link } from 'react-router-dom';
const Hero = () => {
	return (
		<section
			className={`${styles.padding} mx-auto max-w-7xl relative w-full h-[100dvh] flex justify-center items-center flex-col 
		 `}
		>
			<div
				className={`  text-white h-full w-full  flex items-center sm:items-start justify-center flex-col `}
			>
				<div className="text-left bg-gray">
					<p className="text-gray-500 text-sm my-5">&lt;body&gt;</p>
					<div className="ml-10 ">
						<span className="text-gray-500 ">&lt;h1&gt;</span>
						<h1 className="text-4xl sm:text-6xl font-bold tracking-wider">
							Hi,
							<br />
							I’m <span className="text-secondary">Michał</span>
							,
							<br />
							Full Stack Developer.
						</h1>
						<span className="text-gray-500">&lt;/h1&gt;</span>

						<p className=" text-sm mt-2 my-5 font-bold tracking-wider">
							<span className="text-gray-500 font-normal">
								&lt;p&gt;
							</span>
							&nbsp;Websites / Complex Systems / Mobile Apps&nbsp;
							<span className="text-gray-500 font-normal">
								&lt;p&gt;
							</span>
						</p>
					</div>
					<p className="text-gray-500 text-sm my-5">&lt;/body&gt;</p>
				</div>
				<div className="flex gap-5 w-full sm:justify-start justify-center items-center ">
					<Link to="/cv-net-sql-react.pdf" target="_blank" download>
						<button className="px-4 py-2 border-2 border-secondary rounded-full text-secondary hover:text-black hover:bg-secondary bg-transparent font-semibold transition duration-300 hover:shadow-md hover:shadow-secondary/50">
							Download CV
						</button>
					</Link>
					{socials.map((social, index) => (
						<a
							href={social.url}
							rel="noreferrer"
							target="_blank"
							key={index}
						>
							<div
								className="w-10 h-10 cursor-pointer hover:text-black hover:bg-secondary bg-transparent
    rounded-full text-secondary border-2 border-secondary flex justify-center items-center 
    duration-300 hover:shadow-md hover:shadow-secondary/50  relative"
							>
								{social.icon}
							</div>
						</a>
					))}
				</div>
			</div>

			<div className="absolute bottom-10 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[30px] h-[46px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 15, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className="w-2 h-2 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
