import { CityWeatherForecast } from "../interfaces/CityWeatherForecast.interface";

const API_KEY = "dc4a159c14374d585f7cdb4ed8afbf60";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const WeatherForecastApiService = {
	async getWeatherForecast(city: string): Promise<CityWeatherForecast> {
		const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
		const response = await fetch(url);
		const data = await response.json();
		return data;
	},
};
