import React, { FC } from "react";
import styles from "./CityListPage.module.css";
import { Link } from "react-router-dom";

interface CityListPageProps {}

const CityListPage: FC<CityListPageProps> = () => (
	<div>
		<div className="container">
			<div className="header">
				<h1>Simple Weather App</h1>
			</div>
		</div>
		<Link to={`/cities/:kyiv`}>
			<h3>Test to Kyiv</h3>
		</Link>
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
