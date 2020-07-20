import React from 'react';
import { Button } from '.';
import './project.css';

const Project = (props) => {
	const { title, description, link, image, stack } = props.project;

	return (
		<div className="project-wrapper">
			<div className="project-container">
			<h3 className="project-title">{title}</h3>
				<div className="text-wrapper">
					
					<p>
						<ul>
							{stack.map((skill) => {
								return <li>{skill}</li>;
							})}
						</ul>
						<br />
						{description}
			

						<br />
						<Button
							buttonText="View code"
							buttonLink={link}
							buttonClass="btn btn-white btn-small"
						></Button>
					</p>
				</div>
				<div className="image-wrapper">
					<img src={require(`../images/${image}`)} alt="project" />
				</div>
			</div>
		</div>
	);
};

export { Project };
