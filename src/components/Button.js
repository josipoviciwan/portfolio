import React from 'react';
import './button.css';

const Button = ({ buttonText, buttonLink, buttonClass, newTab = false }) => {
	return (
		<a
			href={buttonLink}
			target={newTab ? '_blank' : '_self'}
			rel="noopener noreferrer"
		>
			<input
				type="button"
				className={'btn ' + buttonClass}
				value={buttonText}
			></input>
		</a>
	);
};

export { Button };
