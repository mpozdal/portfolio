import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Timeline</p>
				<h2 className={styles.sectionHeadText}>Education.</h2>
			</motion.div>

			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background:
							'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(116,146,147,0.3) 100% ',

						padding: '3rem 0rem 3rem 2rem',
						boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
					}}
					contentArrowStyle={{
						borderRight: '7px solid  rgba(116,146,147,0.3)',
					}}
					date="Feb 2025 - present"
					iconStyle={{
						background:
							'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(116,146,147,1) 100% ',
						color: '#fff',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '2rem',
					}}
					icon="🔒"
				>
					<h3 className="vertical-timeline-element-title uppercase font-bold text-xl tracking-widest">
						Cybersecurity
					</h3>

					<p className="text-gray-100">
						Cracow Univeristy of Technology
						<br />
						Master's degree
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{
						background:
							'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(116,146,147,0.3) 100%',
						color: '#fff',
						padding: '3rem 0rem 3rem 2rem',
						boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
					}}
					contentArrowStyle={{
						borderRight: '7px solid  rgba(116,146,147,0.3)',
					}}
					className="vertical-timeline-element--work"
					date="Oct 2021 - Jan 2025"
					iconStyle={{
						background:
							'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(116,146,147,1) 100% ',
						color: '#fff',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '2rem',
					}}
					icon="💻"
				>
					<h3 className="vertical-timeline-element-title uppercase font-bold text-xl tracking-widest">
						Computer Science
					</h3>

					<p className="text-gray-100">
						Cracow Univeristy of Technology <br />
						Master of Engineering
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					iconStyle={{
						background:
							'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(116,146,147,1) 100% ',
					}}
				/>
			</VerticalTimeline>
		</>
	);
};

export default SectionWrapper(Education, 'education');
