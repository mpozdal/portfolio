import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-secondary text-justify text-[18px] max-w-3xl leading-[30px]"
			>
				&emsp;I am a Junior Software Engineer at Comarch, building
				enterprise applications with .NET and Angular. Alongside my
				day-to-day work, I am pursuing a master's degree in computer
				science at the Cracow University of Technology, specializing in
				cybersecurity.
				<br />
				<br />
				&emsp;I have been passionate about technology for over nine
				years and writing code for eight. I enjoy full-stack development
				— from polished UIs to APIs, data layers, and cloud-ready
				services — and I like shipping solutions end to end.
				<br />
				<br />
				&emsp;My interests also span security, cryptography, distributed
				systems, and blockchain. Recent work includes ZKML proofs in the
				browser and on-chain verification, reflecting how I combine
				software engineering with a security-first mindset.
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
