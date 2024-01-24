import React from 'react';
import './styles.css';
import handArrow from '../../assets/images/Hand-drawn arrow.png';
import { calendar, lockUnlocked, recording01, videoRecorder } from '../../assets/svg';

const ClearLinkAdvantage = () => {
	return (
		<section className="wcl-container">
			<div className="whyCLHeader-container">
				<div className="whyCLSubheading">The ClearLink Advantage</div>
				<div className="whyCLHeader">Why choose ClearLink?</div>
				<div className="whyCLHeaderSub">
					In a world where connection is everything, ClearLink takes the lead. Our
					<br /> cutting-edge video conferencing app offers:
				</div>
			</div>
			<div className="whyCLBody">
				<div className="whyCLConten-container">
					<div className="whyCLContent-top">
						<div className="whyCLcontent">
							<div className="whyCLcontent-icon">{videoRecorder}</div>
							<div className="whyCLcontent-title">Crystal-clear HD video</div>
							<div className="whyCLcontent-subtitle">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</div>
						</div>
						<div className="whyCLcontent">
							<div className="whyCLcontent-icon">{recording01}</div>
							<div className="whyCLcontent-title">Noise-canceling audio</div>
							<div className="whyCLcontent-subtitle">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</div>
						</div>
					</div>
					<div className="whyCLContent-bottom">
						<div className="whyCLcontent">
							<div className="whyCLcontent-icon">{calendar}</div>
							<div className="whyCLcontent-title">Scheduling made easy</div>
							<div className="whyCLcontent-subtitle">
								Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.
							</div>
						</div>
						<div className="whyCLcontent">
							<div className="whyCLcontent-icon">{lockUnlocked}</div>
							<div className="whyCLcontent-title">Bank-grade security</div>
							<div className="whyCLcontent-subtitle">
								Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.
							</div>
						</div>
					</div>
				</div>
				<div className="whyCLImage">
					<img src={handArrow} className="handArrow" alt="" srcset="" />
				</div>
			</div>
		</section>
	);
};

export default ClearLinkAdvantage;
