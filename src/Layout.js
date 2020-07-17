import React from 'react';
import {
	HeaderContainer,
	AboutContainer,
	ProjectsContainer,
	FooterContainer,
} from './containers';

function Layout() {
	return (
		<div>
			<HeaderContainer></HeaderContainer>
			<AboutContainer></AboutContainer>
			<ProjectsContainer></ProjectsContainer>
			<FooterContainer></FooterContainer>
		</div>
	);
}

export default Layout;
