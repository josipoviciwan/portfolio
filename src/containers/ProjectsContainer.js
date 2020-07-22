import React from 'react';
import { Project } from '../components';
import { projectsData } from '../data/projects';
import './projects.css';

const ProjectsContainer = () => {
	return (
		<main>
			<h2>PROJECTS</h2>
			{projectsData.map((project, key) => {
				return <Project project={project} key={key}></Project>;
			})}
		</main>
	);
};
export { ProjectsContainer };
