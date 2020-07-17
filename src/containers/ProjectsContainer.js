import React from 'react';
import { Project } from '../components';

import { projectsData } from '../data/projects';

const ProjectsContainer = () => {
	return (
		<main>
			{projectsData.map((project, key) => {
				return <Project project={project} key={key}></Project>;
			})}
		</main>
	);
};
export { ProjectsContainer };
