import React from 'react';
import './header.css';
import { Button } from '../components';

const HeaderContainer = () => {
	return (
		<header className="animate-left" id="header">
			<div className="header-wrapper ">
				<h1>
					Hi, my name is <strong>Iwan Josipović</strong> <br />
					I'm a full-stack developer.
				</h1>
				<Button
					buttonText="Get to know me"
					buttonLink="#about"
					buttonClass="btn-white btn-large"
				></Button>
			</div>
		</header>
	);
};

export { HeaderContainer };
