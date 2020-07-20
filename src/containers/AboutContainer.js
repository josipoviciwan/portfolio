import React from 'react';
import { Button } from '../components';
import Profile from '../images/profile.png';
import './about.css';

const AboutContainer = () => {
	return (
		<article className="lin-background animate-left" id="about">
			<h2>ABOUT ME</h2>
			<div className="flexbox">
				<div className="image-wrapper">
					<img src={Profile} className="profile-photo" alt="profile" />
				</div>
				<div className="about-text">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
						neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
						voluptatum consequatur blanditiis inventore debitis fuga numquam
						voluptate architecto itaque molestiae.<br></br> <br></br> Lorem
						ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque,
						ipsa animi maiores repellendu distinctioaperiam earum dolor
						voluptatum consequatur blanditiis inventore debitis fuga numquam
						voluptate architecto itaque molestiae.
						<br />
						<Button
							buttonText="View my CV"
							buttonLink="https://drive.google.com/file/d/1398Z115izWHj2S1Y8axk9nctkwBQI0oA/view?usp=sharing"
							buttonClass="btn btn-color btn-small"
							newTab={true}
						></Button>
					</p>
				</div>
			</div>
		</article>
	);
};
export { AboutContainer };
