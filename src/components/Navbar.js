import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<section id="navbar-section">
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#Home">
						Home
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
								<a className="nav-link" href="#Skills">
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Projects">
									Work
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Work">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Contact">
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
