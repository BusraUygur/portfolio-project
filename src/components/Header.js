import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Document } from 'react-pdf';

const Header = () => {
	return (
		<section id="header-section">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 header">
						<div className="header-texts">
							<h1 className="big-heading">Hi, I'm Busra,</h1>
							<h2 className="small-heading">a web developer.</h2>
							<p className="header-desc">
								I’m a front-end developer located in Portland, Oregon. I am passionate for web
								development and worked as a software QA tester with a keen eye for creating engaging UI,
								bringing products to life. Worked as an automation tester with a keen eye for creating
								engaging UI, bringing products to life. Worked as an automation tester with a keen eye
								for creating engaging UI, bringing products to life.
							</p>
						</div>
						<div className="header-links">
							<a
								className="btn btn-primary btn-lg btn-floating btn-resume"
								href="./public/newResume2.js"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								<span>View Resume</span>
							</a>
							<a
								className="btn btn-primary btn-lg btn-floating btn-links"
								href="https://github.com/BusraUygur"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								className="btn btn-primary btn-lg btn-floating btn-links"
								href="https://www.linkedin.com/feed/"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
