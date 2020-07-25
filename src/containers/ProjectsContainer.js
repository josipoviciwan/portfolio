import React from 'react';
import { Project } from '../components';
import { projectsData } from '../data/projects';
import Fade from 'react-reveal/Fade';
import './projects.css';

const ProjectsContainer = () => {
	return (
		<main>
			<Fade right>
				<h2>PROJECTS</h2>
			</Fade>
			{projectsData.map((project, key) => {
				return <Project project={project} key={key}></Project>;
			})}
		</main>
	);
};
export { ProjectsContainer };
