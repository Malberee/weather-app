import axios from 'axios'

const API_KEY = 'ce5873f95fb84efab81122156230805'

export async function getWeather(query) {
	return await axios
		.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}`)
		.then((res) => res.data)
}
