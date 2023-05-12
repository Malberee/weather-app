import axios from 'axios'

const API_KEY = '8834fdcd896e483ebb4297fb7757e842'

export const getUserLocation = async () => {
	const userCity = await axios
		.get(`https://api.geoapify.com/v1/ipinfo?&apiKey=${API_KEY}`)
		.then((res) => res.data.city.name)
	return userCity

}
