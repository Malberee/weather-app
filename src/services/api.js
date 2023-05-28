import axios from 'axios'

// const API_KEY = 'ce5873f95fb84efab81122156230805'
const API_KEY = '1e187fa330b57996189c96497a6fae94'

export const getLocation = async (query) => {
	return await axios
		.get(
			`https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${API_KEY}`
		)
		.then(async ({ data }) => {
			if (!data.length) {
				console.log('Not found')
				return
			}
			const { lat, lon } = data[0]
			console.log(data)
			const weather = await getWeather(lat, lon)
			console.log(weather)
			return { city: data[0].name, ...weather }
		})
}

const getWeather = async (lat, lon) => {
	return await axios
		.get(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`
		)
		.then(({ data }) => data)
}

export const getUserLocation = async () => {
	let lat
	let lon
	let getLocationPromise = new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				lat = pos.coords.latitude
				lon = pos.coords.longitude

				resolve({lat: lat, lon: lon})
			})
		} else {
			reject('Your browser doesn`t support geolocation API')
		}
	})

	return await getLocationPromise.then(async location => {
		return await axios.get(
			`https://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=5&appid=${API_KEY}`
		).then(({data}) => data[0].name)
	})
}

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
