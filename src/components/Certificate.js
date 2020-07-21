import React from 'react';
import Fade from 'react-reveal/Fade';

const Certificate = (props) => {
	const { name, image, description } = props.certificate;
	return (
		<div className="certificate-container">
			<Fade left>
				<div className="image-wrapper certificate">
					<img src={require(`../images/${image}`)} alt="certificate" />
				</div>
			</Fade>
			<Fade right>
				<div className="text-wrapper">
					<p>
						<strong>{name}</strong>
						{description}
					</p>
				</div>
			</Fade>
		</div>
	);
};

export { Certificate };
