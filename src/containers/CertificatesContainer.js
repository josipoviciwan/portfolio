import React from 'react';
import { Certificate } from '../components';
import { certificates } from '../data/certificates';
import './certificates.css';
const CertificatesContainer = () => {
	return (
		<section>
			<h2>COMPETITIVE PROGRAMMING</h2>

			{certificates.map((certificate, key) => {
				return <Certificate certificate={certificate} key={key}></Certificate>;
			})}
		</section>
	);
};

export { CertificatesContainer };
