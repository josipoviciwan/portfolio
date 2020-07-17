import React from 'react';
import { Button } from '.';
import './project.css';

const Project = (props) => {
	const { title, description, link, image } = props.project;

	return (
		<div className="project-wrapper">
			<h3 className="project-title">{title}</h3>
			<div className="project-container">
				<div className="text-wrapper">
					<p>{description}</p>
					<Button
						buttonText="View code"
						buttonLink={link}
						buttonClass="btn btn-white"
					></Button>
				</div>
				<div className="image-wrapper">
					<img src={require(`../images/${image}`)} alt="project" />
				</div>
			</div>
		</div>
	);
};

export { Project };
