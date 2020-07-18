import React from 'react';
import './certificate.css';
const Certificate = (props) => {
	const { name, image, description } = props.certificate;
	return (
		<div className="certificate-container">
			<div className="image-wrapper">
				<img src={require(`../images/${image}`)} alt="certificate" />
			</div>
			<div className="text-wrapper">
				<p>
					<strong>{name}</strong>
					{description}
				</p>
			</div>
		</div>
	);
};

export { Certificate };
