import { useState, useRef } from 'react';
import { projects } from '../constants';
import { motion, px } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { FaGithub } from 'react-icons/fa';
const Cube = ({ targetRotation, onClick }) => {
	const meshRef = useRef();

	const targetRotations = {
		front: [-0.1, -0.1, -0.1],
		back: [Math.PI - 0.1, -0.1, -0.1],
		left: [-0.1, Math.PI / 2 + 0.1, -0.1],
		right: [-0.1, -Math.PI / 2 - 0.1, 0.1],
		top: [Math.PI / 2, 0, 0],
		bottom: [-Math.PI / 2, 0, 0],
	};

	// Zmieniamy rotację obiektu na wybrany bok
	const springProps = useSpring({
		rotation: targetRotations[targetRotation] || [-0.2, -0.2, -0.2],
		config: { tension: 150, friction: 50 },
	});

	// Po kliknięciu na obiekt zmieniamy stan na nową stronę
	const handleClick = () => {
		//onClick();
	};
	const textures = useTexture({
		front: '/breezy.png',
		left: '/certify.png',
	});
	return (
		<animated.mesh
			ref={meshRef}
			onClick={handleClick}
			rotation={springProps.rotation}
			scale={0.25} // Przypisujemy animowane wartości
		>
			<boxGeometry args={[16, 9, 16]} />
			<meshStandardMaterial map={textures.left} attach="material-1" />
			<meshStandardMaterial map={''} attach="material-2" />
			<meshStandardMaterial map={''} attach="material-3" />
			<meshStandardMaterial map={textures.front} attach="material-4" />
			<meshStandardMaterial map={''} attach="material-5" />
			<meshStandardMaterial map={''} attach="material-6" />
		</animated.mesh>
	);
};

const Projects = () => {
	const [idx, setIdx] = useState(0);
	const [side, setSide] = useState('nz');

	const handleChangeProject = (index) => {
		let countOfProjects = projects.length;
		let temp;
		if (index === -1) {
			temp = countOfProjects - 1;
		} else if (index === countOfProjects) {
			temp = 0;
		} else {
			temp = index;
		}
		switch (temp) {
			case 0:
				setSide('front');
				break;
			case 1:
				setSide('left');
				break;
			default:
				break;
		}

		setIdx(temp);
	};

	return (
		<div className="w-full">
			<motion.div
				variants={textVariant()}
				className="flex w-full flex-col lg:flex-row "
			>
				<div className="grid  lg:grid-cols-2 gap-10">
					{projects.map((project, idx) => (
						<div className="flex flex-col justify-between gap-5 cursor-pointer">
							<div>
								<p className={styles.sectionSubText}>PROJECT</p>
								<h2 className={styles.sectionHeadText}>
									{project.name}.
								</h2>
							</div>

							<div className="text-justify  h-full">
								{project.description}
							</div>
							<div className="flex flex-row gap-1 justify-left items-center">
								{project.tags.map((tag) => (
									<div className="px-2 py-1 text-secondary  border-0 border-secondary rounded-xl">
										#{tag.name}
									</div>
								))}
								<a
									href={project.source_code_link}
									target="_blank"
									rel="noreferrer"
									className="lg:hidden"
								>
									<button className="px-2 py-1  text-secondary  border-2 border-secondary rounded-xl flex justify-center items-center font-bold hover:bg-secondary hover:text-black transition-all hover:opacity-90 hover:scale-110 duration-300 ">
										Github &nbsp; <FaGithub />
									</button>
								</a>
							</div>
							<a
								href={project.source_code_link}
								target="_blank"
								rel="noreferrer"
								className="hidden lg:flex"
							>
								<button className="px-2 py-1 w-1/3 text-secondary  border-2 border-secondary rounded-xl flex justify-center items-center font-bold hover:bg-secondary hover:text-black transition-all hover:opacity-90 hover:scale-110 duration-300 ">
									Github &nbsp; <FaGithub />
								</button>
							</a>
							{/* <div className="flex justify-between ">
								<button
									onClick={() => handleChangeProject(idx - 1)}
									className="w-16 h-16 text-3xl rounded-xl bg-white/10 flex justify-center items-center"
								>
									&lt;
								</button>
								<button
									onClick={() => handleChangeProject(idx + 1)}
									className="w-16 h-16 text-3xl rounded-xl bg-white/10 flex justify-center items-center"
								>
									&gt;
								</button>
							</div> */}
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Projects, 'projects');
