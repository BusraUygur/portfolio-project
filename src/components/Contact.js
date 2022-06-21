import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
	const [ successMessage, setSuccessMessage ] = useState('');
	const { register, handleSubmit, formState: { errors } } = useForm();

	const serviceID = 'service_ID';
	const templateID = 'template_ID';
	const userID = '7f6cH3lxCTnMtHyKv';

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				email: data.email,
				message: data.message
			},
			userID
		);
		r.target.reset();
	};

	const sendEmail = (serviceID, templateID, variables, userID) => {
		emailjs
			.send(serviceID, templateID, variables, userID)
			.then(() => {
				setSuccessMessage('Thank you for your message, we will be in touch in no time!');
			})
			.catch((err) => setSuccessMessage(`Something went wrong ${err}`));
	};

	return (
		<div id="contact-section">
			<div className="container">
				<h1 className="contact-header">Contact Me</h1>
				<p className="contact-par">
					Fill in your info in the form below and I look forward to hearing from you!
				</p>
				<span className="success-message">{successMessage}</span>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row g-3 contact-form">
						<div className="col-md-8 contact-wrapper">
							<input
								type="text"
								className="form-control"
								name="name"
								placeholder="Name*"
								{...register('name', {
									required: 'Please enter your name.',
									maxLength: {
										value: 20,
										message: 'Please enter a name with fewer than 20 characters.'
									}
								})}
							/>
						</div>
						<span className="error-message">{errors.name && errors.name.message}</span>
						<div className="col-md-8 contact-wrapper">
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Email*"
								{...register('email', {
									required: 'Please enter your email.',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Invalid email'
									}
								})}
							/>
						</div>
						<span className="error-message">{errors.email && errors.email.message}</span>
						<div className="col-md-8 contact-wrapper">
							<textarea
								className="form-control"
								name="message"
								placeholder="Message*"
								rows="5"
								{...register('message', {
									required: 'Please add your message.'
								})}
							/>
						</div>
						<span className="error-message">{errors.message && errors.message.message}</span>

						<div className="col-md-12 contact-btn-wrapper">
							<button type="submit" className="btn btn-outline-light contact-button">
								Send Email
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
