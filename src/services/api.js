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
	if (typeof controller !== typeof undefined) {
		controller.abort('CANCEL')
	}

	controller = new AbortController()

	const options = {
		method: 'GET',
		signal: controller.signal,
		headers: {
			'X-RapidAPI-Key': '5224f7ae9amshacfd3523847c519p1b5173jsn8e1f3c0aebf4',
			'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		},
	}

	return await axios
		.request(
			`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${query}`,
			options
		)
		.then((res) =>
			res.data.data.map(({ city, country, id }) => {
				return {
					id: id,
					city: city,
					label: `${country}, ${city}`,
				}
			})
		)
}
