import axios from 'axios'

export const getUserLocation = async () => {
	const userCity = await axios
		.get('https://ip-api.com/json/?fields=49183')
        .then((res) => res.data.city)
	return userCity
}
