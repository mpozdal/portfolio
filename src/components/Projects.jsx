import { projects } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
	return (
		<div className=" flex flex-col lg:grid lg:grid-cols-2 gap-10  ">
			{projects.map((project, idx) => (
				<motion.div
					variants={fadeIn('right', 'spring', idx * 0.2, 0.75)}
					className="flex flex-col justify-between  gap-5 cursor-pointer "
					key={idx}
				>
					<div>
						<p className={styles.sectionSubText}>PROJECT</p>
						<h2 className={styles.sectionHeadText}>
							{project.name}.
						</h2>
					</div>

					<div className="text-justify text-wrap h-full ">
						{project.description}
					</div>
					<div className="flex flex-row flex-wrap gap-1 justify-left items-center  ">
						{project.tags.map((tag) => (
							<div className="px-2 py-1 text-secondary  border-0 border-secondary text-sm rounded-xl">
								#{tag.name}
							</div>
						))}
						{/* <a
							href={project.source_code_link}
							target="_blank"
							rel="noreferrer"
							className="lg:hidden"
						>
							<button className="px-2 py-1  text-secondary  border-2 border-secondary rounded-xl flex justify-center items-center font-bold hover:bg-secondary hover:text-black transition-all hover:opacity-90 hover:scale-110 duration-300 ">
								Github &nbsp; <FaGithub />
							</button>
						</a> */}
					</div>
					<a
						href={project.source_code_link}
						target="_blank"
						rel="noreferrer"
						className="flex"
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
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Projects, 'projects');
