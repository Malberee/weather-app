import axios from 'axios'

const API_KEY = 'ce5873f95fb84efab81122156230805'
const GEO_API_KEY = '8834fdcd896e483ebb4297fb7757e842'

export const getWeather = async (query) => {
	return await axios
		.get(
			`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no
`
		)
		.then(({ data: { location, current, forecast } }) => {
			return {
				location: location,
				current: current,
				forecast: forecast.forecastday,
			}
		})
}

export const getUserLocation = async () =>
	await axios
		.get(`https://api.geoapify.com/v1/ipinfo?&apiKey=${GEO_API_KEY}`)
		.then((res) => res.data.city.name)

let controller

export const getCities = async (query) => {
	if (query.trim() !== '') {
		if (typeof controller !== typeof undefined) {
			controller.abort('CANCEL')
		}

		controller = new AbortController()

		const cities = await axios
			.get(
				`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`,
				{ signal: controller.signal }
			)
			.then((res) => res.data)

		return {
			options: cities.map(({ country, name }) => {
				return {
					value: `${country} ${name}`,
					label: `${country}, ${name}`,
				}
			}),
		}
	}
}
