import React from 'react';
import { Button } from './';
import Fade from 'react-reveal/Fade';
const Header = () => {
	return (
		<div className="header-wrapper ">
			<Fade left>
				<h1>
					Hi, my name is <strong>Iwan Josipović</strong> <br />
					I'm a growing developer.
				</h1>
				<Button
					buttonText="Get to know me"
					buttonLink="#about"
					buttonClass="btn-white btn-large"
				></Button>
			</Fade>
		</div>
	);
};

export { Header };
