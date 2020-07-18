import React from 'react';
import {
	HeaderContainer,
	AboutContainer,
	ProjectsContainer,
	FooterContainer,
	CertificatesContainer,
	ContactContainer,
} from './containers';

function Layout() {
	return (
		<div>
			<HeaderContainer></HeaderContainer>
			<AboutContainer></AboutContainer>
			<ProjectsContainer></ProjectsContainer>
			<CertificatesContainer></CertificatesContainer>
			<ContactContainer></ContactContainer>
			<FooterContainer></FooterContainer>
		</div>
	);
}

export default Layout;
