import React from 'react';
import './styles.css';
import avatar from '../../assets/images/Avatar.png';
import { arrowLeft, arrowRight, shopifyIcon, stars } from '../../assets/svg';

const ShopifySection = () => {
	return (
		<section className="shopify-container">
			<div className="shopify-content">
				{shopifyIcon}
				<div className="star-row shopify-star">
					{stars}
					{stars}
					{stars}
					{stars}
					{stars}
				</div>
				<div className="shopify-header">ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</div>
				<div className="shopify-review flex">
					<div className="shopify-person-review flex">
						<img src={avatar} alt="" />
						<div className="shopify-text flex">
							<div className="shopify-text-name">Sarah Thompson</div>
							<div className="shopify-text-title">Project Manager, Shopify</div>
						</div>
					</div>
					<div className="arrow flex">
						<div className="whyCLcontent-icon">{arrowLeft}</div>
						<div className="whyCLcontent-icon">{arrowRight}</div>
					</div>
				</div>
			</div>
			<div className="shopify-image"></div>
		</section>
	);
};

export default ShopifySection;
