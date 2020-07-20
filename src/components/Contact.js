import React from 'react';
import { Button } from './';
import './contact.css';
const Contact = () => {
	return (
		<div className="contact-wrapper">
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
		</div>
	);
};

export { Contact };
