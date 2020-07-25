import React from 'react';
import { Certificate } from '../components';
import { certificates } from '../data/certificates';
import './certificates.css';
import Fade from 'react-reveal/Fade';

const CertificatesContainer = () => {
	return (
		<section>
			<Fade left>
				<h2>CERTIFICATES</h2>
			</Fade>
			{certificates.map((certificate, key) => {
				return <Certificate certificate={certificate} key={key}></Certificate>;
			})}
		</section>
	);
};

export { CertificatesContainer };
