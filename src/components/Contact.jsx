import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
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
			process.env.REACT_APP_SERVICE_ID,
			process.env.REACT_APP_TEMPLATE_ID,
			{
				from_name: form.name,
				to_name: 'Michał',
				from_email: form.email,
				to_email: process.env.REACT_APP_EMAIL,
				message: form.message,
			},
			process.env.REACT_APP_PUBLIC_KEY
		);
		setLoading(false);
		setForm({ name: '', email: '', message: '' });
	};
	return (
		<section className="w-full  flex justify-around flex-col lg:flex-row gap-8">
			<div className=" flex justify-start items-center  ">
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>CONTACT</p>
					<h2 className={styles.sectionHeadText}>Get in Touch.</h2>
				</motion.div>
			</div>
			<div className="flex gap-5">
				<form
					onSubmit={handleSubmit}
					ref={formRef}
					className="flex flex-col gap-8 w-full"
				>
					<label>
						<p>Name</p>
						<input
							placeholder="e.g. John Doe"
							className="w-full lg:w-[400px] px-4 py-3  outline-none  bg-transparent border-b-[2px] border-gray-600 focus:border-secondary transition-all duration-300 rounded-none"
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
							className="w-full lg:w-[400px] px-4 py-3  outline-none  bg-transparent border-b-[2px] border-gray-600 focus:border-secondary transition-all duration-300 rounded-none"
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
							className="w-full lg:w-[400px] px-4 py-3  outline-none  bg-transparent border-b-[2px] border-gray-600 focus:border-secondary transition-all duration-300 rounded-none"
							rows="4"
							value={form.message}
							onChange={handleChange}
							name="message"
						/>
					</label>
					<button
						type="submit"
						className="w-full lg:w-[400px] px-4 py-2 rounded-xl bg-white text-black hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 hover:scale-90 hover:opacity-90"
					>
						{loading ? 'Sending..' : 'Send message'}
					</button>
				</form>
			</div>
		</section>
	);
};

export default SectionWrapper(Contact, 'contact');
