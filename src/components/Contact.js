import React from 'react';
import { Button } from './';
import Fade from 'react-reveal/Fade';

const Contact = () => {
	return (
		<div className="contact-wrapper">
			<Fade left>
				<h2>CONTACT</h2>
				<div className="contact-container">
					<p>
						Feel free to contact me.
						<br />
						<Button
							buttonText="Contact me"
							buttonLink="mailto:josipoviciwan@gmail.com?Subject=Hello%20Iwan!"
							buttonClass="btn btn-color btn-large"
							newTab={true}
						></Button>
					</p>
				</div>
			</Fade>
		</div>
	);
};

export { Contact };
