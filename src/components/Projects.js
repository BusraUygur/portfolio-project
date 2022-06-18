import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
	return (
		<section id="projects-section">
			<div className="container">
				<div className="projects-wrapper row justify-content-center">
					<h1 className="projects-header col-lg-12">Projects</h1>
					<div className="img-box-wrapper col-lg-6 col-sm-12">
						<h4 className="project-name">Movie Project</h4>
						<div className="projects-img-box">
							<img className="projects-img" src="../img/movie-desktop.png" alt="Movie Project" />
						</div>
						<div className="project-icons">
							<FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
							<FontAwesomeIcon className="icon" icon={faCss3Alt} size="2x" />
							<FontAwesomeIcon className="icon" icon={faJs} size="2x" />
						</div>
						<div className="project-desc">
							<p>
								Designed a movie website with JavaScript and CSS. It manipulates DOM elements to output
								the app onto an HTML canvas element.
							</p>
						</div>
						<div className="project-btn">
							<a
								className="btn btn-outline-light"
								href="https://github.com/BusraUygur/moviewebsite"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								View GitHub Repo
							</a>

							<a
								className="btn btn-outline-light"
								href="https://busrauygur.github.io/moviewebsite/"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								View Website
							</a>
						</div>
					</div>
					<div className="img-box-wrapper col-lg-6 col-sm-12">
						<h4 className="project-name">To Do App</h4>
						<div className="projects-img-box">
							<img className="projects-img" src="../img/todo-desktop.png" alt="To Do App Project" />
						</div>
						<div className="project-icons">
							<FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
							<FontAwesomeIcon className="icon" icon={faCss3Alt} size="2x" />
							<FontAwesomeIcon className="icon" icon={faJs} size="2x" />
							<FontAwesomeIcon className="icon" icon={faReact} size="2x" />
						</div>
						<div className="project-desc">
							<p>
								Based on classic To-Do app, this application was created in React.js with CSS allowing
								user to add and delete notes. Relies on both hooks and the use of objects.
							</p>
						</div>
						<div className="project-btn">
							<a
								className="btn btn-outline-light"
								href="https://github.com/BusraUygur/todoapp"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								View GitHub Repo
							</a>

							<a
								className="btn btn-outline-light"
								href="https://busrauygur.github.io/todoapp/"
								target="_blank"
								rel="noreferrer"
								role="button"
							>
								View Website
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
