import React from 'react';
import './styles.css';
import CTAImg from '../../assets/images/cta.png';
import Check from '../../assets/images/check-circle.png';

const CTASection = () => {
	return (
		<section className="app__cta">
			<div className="cta__text">
				<p className="cta__header"> Ready to clear the path to perfect communication?</p>
				<div className="cta__perks">
					<span>
						<img src={Check} alt="check-circle" /> 30 days free trial
					</span>
					<span>
						<img src={Check} alt="check-circle" /> Cancel at any time
					</span>
					<span>
						<img src={Check} alt="check-circle" /> Access to all features
					</span>
					<span>
						<img src={Check} alt="check-circle" /> Peronalized onboarding
					</span>
				</div>
				<div className="cta__btn">
					<button className="btn_one">Talk to sales</button>
					<button className="btn_two">Start your free trial</button>
				</div>
			</div>
			<div className="cta_img">
				<img src={CTAImg} />
			</div>
		</section>
	);
};

export default CTASection;
