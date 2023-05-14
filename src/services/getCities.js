import axios from 'axios'

const API_KEY = 'ce5873f95fb84efab81122156230805'

let controller

export const getCities = async (query) => {
	if (query.trim() !== '') {
		if (typeof controller !== typeof undefined) {
			// controller.abort('CANCEL')
		}

		controller = new AbortController()

		const cities = await axios
			.get(
				`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`,
				{ signal: controller.signal }
			)
			.then((res) => res.data)

		const result = cities.map(({ id, country, name }) => {
			return { id: id, name: name, title: `${country}, ${name}` }
		})
		console.log(result)

		return result
	}
}
