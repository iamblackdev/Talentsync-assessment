import React from 'react';
import './styles.css';
import avatars from '../../assets/images/avatars.png';
import { bot, gridIcon1, gridIcon2, gridIcon3, gridIcon4, gridIcon5, gridIcon6, stars } from '../../assets/svg';

const HeroSection = () => {
	return (
		<section className="hero">
			<div className="Hero-title-container">
				<h2 className="Hero-title">
					Uniting the world,
					<br />
					one video call at a time
				</h2>
				<p className="hero-subtitle">
					Experience the future of communication with ClearLink -<br /> where crystal-clear video conferencing meets
					<br /> unparalleled simplicity.
				</p>
				<div className="hero-button">
					<button className="startYourTrial">Start your free trial</button>
					<div className="Ai-assistant">
						{bot}
						Discover AI assistant
					</div>
				</div>
				<div className="user-review">
					<div className="avatar_group">
						<img src={avatars} alt="users" />
					</div>
					<div className="reviews">
						<div className="star-row">
							{stars}
							{stars}
							{stars}
							{stars}
							{stars}
							{stars}
							<span className="star-number">5.0</span>
						</div>
						<div className="review-content">from 3,000+ reviews</div>
					</div>
				</div>
			</div>
			<div className="Hero-image-display">
				<div className="image-grid">
					<div className="grid">
						<div className="grid-image-container grid-01">{/* <img src={image1} alt="" srcset="" /> */}</div>
						<div className="grid-image-container grid-02">{/* <img src={image2} alt="" srcset="" /> */}</div>
						<div className="grid-image-container grid-03">{/* <img src={image3} alt="" srcset="" /> */}</div>
					</div>
					<div className="grid">
						<div className="grid-image-container grid-04">{/* <img src={image4} alt="" srcset="" /> */}</div>
						<div className="grid-image-container grid-05">{/* <img src={image5} alt="" srcset="" /> */}</div>
						<div className="grid-image-container grid-06">{/* <img src={image6} alt="" srcset="" /> */}</div>
					</div>
				</div>
				<div className="grid-icons">
					<div className="icon-container">{gridIcon1}</div>
					<div className="icon-container">{gridIcon2}</div>
					<div className="icon-container">{gridIcon3}</div>
					<div className="icon-container">{gridIcon4}</div>
					<div className="icon-container">{gridIcon5}</div>
					<div className="icon-container">{gridIcon6}</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
