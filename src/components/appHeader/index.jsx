import React from 'react';
import './styles.css';
import { appLogo, chevronDown } from '../../assets/svg';

const AppHeader = () => {
	return (
		<header className="header">
			<div className="header-content">
				<div className="logo">
					{appLogo}
					<div className="logo-name">ClearLink</div>
				</div>
				<div className="nav-list">
					<div className="nav-item">
						<div className="nav-item-title">Product</div>
						{chevronDown}
					</div>
					<div className="nav-item">
						<div className="nav-item-title">Solutions</div>
						{chevronDown}
					</div>
					<div className="nav-item">
						<div className="nav-item-title">Resources</div>
						{chevronDown}
					</div>
					<div className="nav-item-title">Pricing</div>
				</div>
				<div className="nav-button">
					<button className="talkToSales">Talk to Sales</button>
					<button className="signuP">Sign up for Free</button>
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
