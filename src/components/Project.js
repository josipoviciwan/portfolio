import React, { useRef } from 'react';
import { Button } from './';
import Fade from 'react-reveal/Fade';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const Project = (props) => {
	const { title, description, link, image, stack } = props.project;

	const myRef = useRef(title);
	const executeScroll = () => scrollToRef(myRef);
	return (
		<div className="project-wrapper" ref={myRef}>
			<div className="project-container">
				<Fade left>
					<h3 className="project-title">{title}</h3>
					<div className="text-wrapper">
						<ul>
							{stack.map((skill, key) => {
								return <li key={key}>{skill}</li>;
							})}
						</ul>
						<p>
							<br />
							{description}
							<br />
							<span onClick={executeScroll}>
								<Button
									buttonText="View code"
									buttonLink={link}
									buttonClass="btn btn-white btn-small"
									newTab={true}
								></Button>
							</span>
						</p>
					</div>
				</Fade>
				<Fade right>
					<div className="image-wrapper">
						<img src={require(`../images/${image}`)} alt="project" />
					</div>
				</Fade>
			</div>
		</div>
	);
};

export { Project };
