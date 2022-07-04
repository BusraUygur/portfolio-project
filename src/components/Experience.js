import React from 'react';

const Experience = () => {
	return (
		<section id="experience-section">
			<div className="container experience-wrapper">
				<div className="d-flex justify-content-center my-5">
					<h1 className="experience-header">Experience & Relevant Courses</h1>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker" />
					<div className="timeline-content">
						<h4>Cydeo - Software Test Automation Course</h4>
						<h6>November 2017 - June 2018</h6>
						<p>
							Attended Cydeo coding school focuses on Test Automation using Java. Completed over 1000+
							hours of full-time course instruction and projects.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker" />
					<div className="timeline-content">
						<h4>Freddie Mac</h4>
						<h5>Automation Tester</h5>
						<h6>October 2018 - June 2019</h6>
						<p>
							Used Selenium WebDriver as client library with Java to design, develop and implement page
							object model (POM) for automated testing in an agile environment.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker" />
					<div className="timeline-content">
						<h4>Wells Fargo</h4>
						<h5>QA Automation Tester</h5>
						<h6>June 2019 - September 2021</h6>
						<p>
							Owned and managed multiple projects and successfully handled deliverables within a dynamic
							scrum team with a strong agile mindset. Implemented automation scripts using Java and OOP.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker" />
					<div className="timeline-content">
						<h4>Web Development Course - Udemy</h4>
						<h6>October 2021 - May 2022</h6>
						<p>Built responsive websites using HTML, CSS, JavaScript, React.js, and Bootstrap.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
