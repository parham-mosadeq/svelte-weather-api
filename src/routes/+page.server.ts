import type { OpenMeteoForecastResponse, WeatherDay } from '../types/weather.types';
import type { PageServerLoad } from './$types';

const baseUrl =
	'https://api.open-meteo.com/v1/forecast?latitude=29.61&longitude=52.53&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&timezone=Asia/Tehran';

const fetchWeather = async (): Promise<WeatherDay[]> => {
	try {
		const response = await fetch(baseUrl);

		if (!response.ok) {
			throw new Error(`Weather API error: ${response.status} ${response.statusText}`);
		}

		const weather = (await response.json()) as OpenMeteoForecastResponse;

		const days = weather.daily.time.map((date: string, i: number) => {
			const parsedDate = new Date(date);
			return {
				date: parsedDate.toLocaleDateString('fa-IR'),
				weekday: parsedDate.toLocaleDateString('fa-IR', { weekday: 'long' }),
				maxTemp: weather.daily.temperature_2m_max[i],
				minTemp: weather.daily.temperature_2m_min[i],
				precipProb: weather.daily.precipitation_probability_max[i],
				precipSum: weather.daily.precipitation_sum[i],
				hasRain:
					weather.daily.precipitation_sum[i] > 0 ||
					weather.daily.precipitation_probability_max[i] > 50
			} satisfies WeatherDay;
		});

		return days;
	} catch (error) {
		console.error('Weather fetch failed:', error);
		throw error;
	}
};

export const load: PageServerLoad = () => {
	return {
		weather: fetchWeather()
	};
};
