import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faJava, faReact, faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	return (
		<section id="skills-section">
			<div className="container skills-wrapper my-5">
				<div className="row">
					<h1 className="skills-header col-lg-12">Skills & Tools</h1>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faHtml5} size="6x" color="#e34c26" />
						<h3>HTML5</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faCss3Alt} size="6x" color="#2965f1" />
						<h3>CSS3</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faBootstrap} size="6x" color="#8f61f3" />
						<h3>Bootstrap</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faJs} size="6x" color="#f7df1e" />
						<h3>JavaScript</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faReact} size="6x" color="#61dbfb" />
						<h3>React</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faJava} size="6x" color="#f89820" />
						<h3>Java</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faTerminal} size="6x" />
						<h3>Command Line</h3>
					</div>
					<div className="skills-box col-lg-3 col-sm-6">
						<FontAwesomeIcon icon={faGithub} size="6x" />
						<h3>GitHub</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
