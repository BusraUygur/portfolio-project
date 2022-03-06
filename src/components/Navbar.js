import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
							<a className="nav-link" href="#About">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#Projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#Work">
								Work
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
	);
};

export default Navbar;
