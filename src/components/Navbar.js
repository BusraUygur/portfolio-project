import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [ isActive, setActive ] = useState(false);

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<section id="navbar-section">
			<div className="container-fluid">
				<nav className="navbar fixed-top navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#navbar-section" onSubmit={handleToggle}>
						BU
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<FontAwesomeIcon icon={faBars} className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#skills-section" role="button">
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#experience-section" role="button">
									Experience
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects-section" role="button">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact-section" role="button">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;
