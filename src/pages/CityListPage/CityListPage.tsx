import React, { FC } from "react";
import styles from "./CityListPage.module.css";

interface CityListPageProps {}

const CityListPage: FC<CityListPageProps> = () => (
	<div>
		<div className="container">
			<div className="header">
				<h1>Simple Weather App</h1>
			</div>
		</div>

		<div className="container">
			<div className="footer">
				<p>
					Made with <span>❤</span> by Anton Olifan
				</p>
			</div>
		</div>
	</div>
);

export default CityListPage;
