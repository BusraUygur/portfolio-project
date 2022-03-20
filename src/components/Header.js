import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

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
								I’m a front-end developer and worked as an automation tester with a keen eye for
								creating engaging UI, bringing products to life. Worked as an automation tester with a
								keen eye for creating engaging UI, bringing products to life. Worked as an automation
								tester with a keen eye for creating engaging UI, bringing products to life.
							</p>
						</div>
						<div className="header-links">
							<a
								className="btn btn-primary btn-lg btn-floating"
								href="#!"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								<FontAwesomeIcon icon={faFile} />
							</a>
							<a
								className="btn btn-primary btn-lg btn-floating"
								href="https://github.com/BusraUygur"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								className="btn btn-primary btn-lg btn-floating"
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
					{/* <div className="col-lg-6 col-sm-12 header-images">
						<img className="sec-header-img" src="/img/me-ss.png" alt="coding-img" />
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Header;
