import React, { useRef } from 'react';
import { Button } from '.';
import './project.css';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const Project = (props) => {
	const { title, description, link, image, stack } = props.project;

	const myRef = useRef(title);
	const executeScroll = () => scrollToRef(myRef);
	return (
		<div className="project-wrapper" ref={myRef}>
			<div className="project-container">
				<h3 className="project-title">{title}</h3>
				<div className="text-wrapper">
					<p>
						<ul>
							{stack.map((skill) => {
								return <li>{skill}</li>;
							})}
						</ul>
						<br />
						{description}
						<br />
						<div onClick={executeScroll}>
							<Button
								buttonText="View code"
								buttonLink={link}
								buttonClass="btn btn-white btn-small"
								newTab={true}
							></Button>
						</div>
					</p>
				</div>
				<div className="image-wrapper">
					<img src={require(`../images/${image}`)} alt="project" />
				</div>
			</div>
		</div>
	);
};

export { Project };
