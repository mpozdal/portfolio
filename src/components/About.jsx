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
				I am a master's student in computer science at the Cracow
				University of Technology, specializing in cybersecurity. My
				passion for IT spans over nine years, and I have been
				programming for eight. I enjoy working on both frontend and
				backend development, allowing me to create comprehensive
				solutions. Additionally, I have extensive knowledge of hardware,
				networks, firewalls, security, and databases.
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
