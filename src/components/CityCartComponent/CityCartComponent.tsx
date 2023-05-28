import React from "react";
import styles from "./CityCartComponent.module.scss";

const CityCartComponent = () => {
	return (
		<div className={styles.cards}>
			<div className={styles.city}>
				<span>Kyiv</span>
				<sup>UA</sup>
			</div>
			<div className={styles.temp}>
				13
				<sup>°C</sup>
			</div>
			<div className={styles.weather}>
				<img className={styles.icon} src="" alt="icon" />
				<span>Sunny</span>
			</div>
		</div>
	);
};

export default CityCartComponent;
