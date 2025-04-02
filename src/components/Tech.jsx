import { technologies } from '../constants';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { fadeIn } from '../utils/motion';
const Tech = () => {
	return (
		<div className=" flex justify-center  items-center w-full">
			<div className="grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3 w-full gap-5">
				{technologies.map((tech, index) => (
					<a
						href={() => false}
						data-tooltip-id="my-tooltip"
						data-tooltip-content={tech.name}
						data-tooltip-place="top"
					>
						<Tooltip id="my-tooltip" />
						<motion.div
							variants={fadeIn(
								'right',
								'spring',
								index * 0.2,
								0.75
							)}
							className="w-28 h-28 flex  justify-center items-center"
							key={tech.name}
						>
							<BallCanvas icon={tech.icon} />
						</motion.div>
					</a>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, 'tech');
