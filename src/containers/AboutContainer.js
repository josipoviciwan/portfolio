import React from 'react';
import { Button } from '../components';
import Profile from '../images/profile.jpg';
import Fade from 'react-reveal/Fade';
import './about.css';

const AboutContainer = () => {
	return (
		<article className="lin-background" id="about">
			<Fade right>
				<div className="flexbox">
					<h2>ABOUT ME</h2>
					<div className="image-wrapper">
						<img src={Profile} className="profile-photo" alt="profile" />
					</div>
					<div className="about-text">
						<p>
							A <span>computer science master's degree</span> and{' '}
							<span>mathematics bachelor's degree</span> resulted in strong
							algorithmic, time complexity and analytical skills.
							<br />
							<br />
							"If you match all the requirements for the job, you have nothing
							to learn."
							<br />
							<Button
								buttonText="View my CV"
								buttonLink="https://drive.google.com/u/0/uc?id=1398Z115izWHj2S1Y8axk9nctkwBQI0oA&export=download"
								buttonClass="btn btn-color btn-small"
							></Button>
						</p>
					</div>
				</div>
			</Fade>
		</article>
	);
};
export { AboutContainer };
