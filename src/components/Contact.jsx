import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import emailjs from '@emailjs/browser';
const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs.send(
			'service_jey50c8',
			'template_lvi50pd',
			{
				from_name: form.name,
				to_name: 'Michał',
				from_email: form.email,
				to_email: 'pozdal.michal@gmail.com',
				message: form.message,
			},
			'7505z8gO2BXSHROqy'
		);
		setLoading(false);
	};
	return (
		<section className="flex h-[600px] flex-col lg:flex-row">
			<div className="flex justify-center lg:justify-start items-center  w-full h-full">
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>CONTACT</p>
					<h2 className={styles.sectionHeadText}>Get in Touch.</h2>
				</motion.div>
			</div>
			<div className="flex justify-center items-center w-full h-full">
				<form
					onSubmit={handleSubmit}
					ref={formRef}
					className="flex flex-col gap-8 "
				>
					<label>
						<p>Name</p>
						<input
							placeholder="e.g. John Doe"
							className="w-[400px] px-4 py-3 rounded-xl outline-none border-none"
							type="text"
							value={form.name}
							onChange={handleChange}
							name="name"
						/>
					</label>
					<label>
						<p>Email</p>
						<input
							placeholder="e.g. example@gmail.com"
							className="w-[400px] px-4 py-3 rounded-xl outline-none border-none"
							type="email"
							value={form.email}
							onChange={handleChange}
							name="email"
						/>
					</label>
					<label>
						<p>Message</p>
						<textarea
							placeholder="What you want to say?"
							className="w-[400px] px-4 py-3 rounded-xl outline-none border-none"
							rows="4"
							value={form.message}
							onChange={handleChange}
							name="message"
						/>
					</label>
					<button
						type="submit"
						className="w-[400px] px-4 py-2 rounded-xl bg-white text-black hover:bg-secondary hover:text-white cursor-pointer transition-colors duration-300"
					>
						{loading ? 'Sending..' : 'Send message'}
					</button>
				</form>
			</div>
		</section>
	);
};

export default SectionWrapper(Contact, 'contact');
