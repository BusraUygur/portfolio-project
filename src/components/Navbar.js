import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [ navOpen, setNavOpen ] = useState(false);

	function toggleNav() {
		setNavOpen((state) => !state);
	}

	return (
		<section id="navbar-section">
			<div className="container-fluid">
				<nav className="navbar fixed-top navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#navbar-section">
						BU
					</a>
					<button
						onClick={toggleNav}
						className={navOpen ? 'navbar-toggler' : 'navbar-toggler collapsed'}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<FontAwesomeIcon icon={faBars} className="navbar-toggler-icon" />
					</button>

					<div
						className={navOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}
						id="navbarTogglerDemo01"
					>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#skills-section" role="button" onClick={toggleNav}>
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#experience-section" role="button" onClick={toggleNav}>
									Experience
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects-section" role="button" onClick={toggleNav}>
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact-section" role="button" onClick={toggleNav}>
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
