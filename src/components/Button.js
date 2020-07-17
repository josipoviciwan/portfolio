import React from 'react';
import './button.css';

const Button = ({ buttonText, buttonLink, buttonClass }) => {
	return (
		<a href={buttonLink}>
			<input
				type="button"
				className={'btn ' + buttonClass}
				value={buttonText}
			></input>
		</a>
	);
};

export { Button };
