import React from 'react';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import './footer.css';
const Footer = () => {
	return (
		<div id="footer">
			<div>
				<a href="#header">&#xe800;</a>
			</div>
			<hr></hr>
			<div className="social-links">
				<a
					href="https://www.linkedin.com/in/iwan-josipovi%C4%87-b1357170/"
					target="_blank"
				>
					&#xf0e1;
				</a>
				<a href="https://github.com/josipoviciwan" target="_blank">
					&#xf09b;
				</a>
				<a href="https://www.facebook.com/iwanjosip96" target="_blank">
					&#xf09a;
				</a>
				<a href="https://www.instagram.com/codefortwo/" target="_blank">
					&#xf16d;
				</a>
			</div>
		</div>
	);
};

export { Footer };
