import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Wave = () => {
	const meshRef = useRef();
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	// Obsługa pozycji myszy
	const handleMouseMove = (event) => {
		const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalizacja pozycji X
		const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalizacja pozycji Y
		setMousePos({ x, y });
	};

	// Animacja wstęgi w 3D
	useFrame(({ clock }) => {
		const time = clock.getElapsedTime();
		const mesh = meshRef.current;
		const positions = mesh.geometry.attributes.position.array;

		for (let i = 0; i < positions.length; i += 3) {
			const x = positions[i];
			const z = positions[i + 2];

			// Dynamiczne falowanie w czasie + wpływ myszy
			const distance = Math.sqrt(
				(x - mousePos.x * 10) ** 2 + (z - mousePos.y * 10) ** 2
			);
			const influence = Math.max(0, 1 - distance / 5); // Im bliżej myszy, tym większa amplituda

			positions[i + 1] = Math.sin(x * 2 + time) * 0.5 + influence * 2;
		}

		mesh.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<mesh
			ref={meshRef}
			position={[0, 0, 0]}
			rotation={[-Math.PI / 2, 0, 0]}
			onPointerMove={handleMouseMove} // Reaguj na ruch myszy
		>
			{/* PlaneGeometry z dużą liczbą segmentów */}
			<planeGeometry args={[20, 20, 100, 100]} />
			{/* Materiał siatki */}
			<meshBasicMaterial wireframe color="#00ffcc" />
		</mesh>
	);
};

const WaveBackground3D = () => {
	return (
		<div style={{ height: '100vh', backgroundColor: 'black' }}>
			<Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
				<ambientLight intensity={0.5} />
				<Wave />
			</Canvas>
		</div>
	);
};

export default WaveBackground3D;
