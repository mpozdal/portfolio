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
		rotation: targetRotations[targetRotation] || [-0.1, -0.1, -0.1],
		config: { tension: 170, friction: 26 },
	});

	// Po kliknięciu na obiekt zmieniamy stan na nową stronę
	const handleClick = () => {
		onClick();
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
			scale={0.3} // Przypisujemy animowane wartości
		>
			<boxGeometry args={[16, 9, 16]} />
			<meshStandardMaterial
				map={textures.front} // Textura dla przedniego boku
				attach="material-0"
			/>
			<meshStandardMaterial
				map={textures.left} // Textura dla lewego boku
				attach="material-1"
			/>
			<meshStandardMaterial
				map={textures.front} // Textura dla górnego boku
				attach="material-4"
			/>
			<meshStandardMaterial
				map={textures.front} // Textura dla dolnego boku
				attach="material-5"
			/>
			<meshStandardMaterial
				color="black" // Textura dla prawego boku
				attach="material-2"
			/>
			<meshStandardMaterial
				color="black" // Textura dla tylnego boku
				attach="material-3"
			/>
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
			case 2:
				setSide('right');
				break;
			default:
				break;
		}

		setIdx(temp);
	};

	return (
		<>
			<motion.div
				variants={textVariant()}
				className="flex w-full flex-col lg:flex-row "
			>
				<div className="lg:w-1/2 w-full flex flex-col gap-4">
					<p className={styles.sectionSubText}>PROJECTS</p>
					<h2 className={styles.sectionHeadText}>
						{projects[idx].name}.
					</h2>

					<p classname="text-justify">{projects[idx].description}</p>
					<div className="flex flex-row gap-1 justify-left items-center">
						{projects[idx].tags.map((tag) => (
							<div className="px-2 py-1 text-secondary  border-0 border-secondary rounded-xl">
								#{tag.name}
							</div>
						))}
						<a
							href={projects[idx].source_code_link}
							target="_blank"
							rel="noreferrer"
						>
							<button className="px-2 py-1 text-secondary  border-2 border-secondary rounded-xl flex justify-center items-center font-bold hover:bg-secondary hover:text-black transition-all">
								Github &nbsp; <FaGithub />
							</button>
						</a>
					</div>

					<div className="flex justify-between ">
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
					</div>
				</div>
				<div className=" w-full lg:w-1/2 ">
					<Canvas>
						<ambientLight intensity={0.6} />

						<Cube targetRotation={side} onClick={() => {}} />
					</Canvas>
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Projects, 'projects');
