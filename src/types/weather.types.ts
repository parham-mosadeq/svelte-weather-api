export interface OpenMeteoDailyResponse {
	time: string[];
	weather_code: number[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	precipitation_sum: number[];
	precipitation_probability_max: number[];
}

export interface OpenMeteoForecastResponse {
	daily: OpenMeteoDailyResponse;
}

export interface WeatherDay {
	date: string;
	weekday: string;
	maxTemp: number;
	minTemp: number;
	precipProb: number;
	precipSum: number;
	hasRain: boolean;
}
