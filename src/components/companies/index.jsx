import React from 'react';
import './styles.css';
import { company1, company2, company3, company4, company5, company7 } from '../../assets/svg';

const Companies = () => {
	return (
		<section>
			<div className="joinOthers">Join 1,500+ companies already video conferencing the ClearLink way</div>
			<div className="oCimages">
				{company1}
				{company2}
				{company3}
				{company4}
				{company5}
				{company7}
			</div>
		</section>
	);
};

export default Companies;
