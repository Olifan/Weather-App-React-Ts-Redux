import React from "react";
import styles from "./CityCartComponent.module.scss";

const CityCartComponent = () => {
	return (
		<div className="cards">
			<div className="city">
				<span>Kyiv</span>
				<sup>UA</sup>
			</div>
			<div className="temp">
				13
				<sup>°C</sup>
			</div>
			<div className="weather">
				<img className="icon" src="" alt="icon" />
				<span>Sunny</span>
			</div>
		</div>
	);
};

export default CityCartComponent;
