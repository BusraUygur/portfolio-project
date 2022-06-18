import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<section id="header-section">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 header">
						<div className="header-texts">
							<h1 className="big-heading">Hi, I'm Busra,</h1>
							<h2 className="small-heading">a front-end developer.</h2>
							<p className="header-desc">
								I’m a front-end developer located in Portland, Oregon. I have over 3 years of experience
								as a QA automation engineer. From testing to designing and developing responsive web
								pages, I'm excited to continue to build upon my skills.
							</p>
						</div>
						<div className="header-links">
							<a
								className="btn btn-primary btn-lg btn-floating btn-resume"
								href="https://busrauygur.github.io/resume/"
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
