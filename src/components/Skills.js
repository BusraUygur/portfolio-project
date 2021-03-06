import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faJava,
	faReact,
	faBootstrap,
	faGithub,
	faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faMobile } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	return (
		<section id="skills-section">
			<div className="container skills-wrapper my-5">
				<div className="row">
					<h1 className="skills-header col-lg-12">Skills & Tools</h1>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faHtml5} size="3x" />
						<h3>HTML5</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faCss3Alt} size="3x" />
						<h3>CSS3</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faJs} size="3x" />
						<h3>JavaScript</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faJava} size="3x" />
						<h3>Java</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faReact} size="3x" />
						<h3>React</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faBootstrap} size="3x" />
						<h3>Bootstrap</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<img className="icon-testing" src="./img/selenium.png" alt="" />
						<h3>Selenium</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<img className="icon-testing" src="./img/cucumber.png" alt="" /> <h3>Cucumber</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faMobile} size="3x" />
						<h3>Responsive Design</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faGithub} size="3x" />
						<h3>GitHub</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faTerminal} size="3x" />
						<h3>Command Line</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon className="icon" icon={faJenkins} size="3x" />
						<h3>Jenkins</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
