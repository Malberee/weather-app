import { useState, useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { getWeather } from '../services/getWeather'
import { getUserLocation } from '../services/getUserLocation'
import moment from 'moment'
import ukLocale from 'moment/locale/uk'
import './App.scss'
import CurrentWeather from './CurrentWeather'
// import ForecastWeather from './ForecastWeather'

const App = () => {
	const [query, setQuery] = useState('')
	const [location, setLocation] = useState({})
	const [weather, setWeather] = useState({})
	const [forecast, setForecast] = useState({})
	const [isLoading, setIsLoading] = useState(false)

	// const onSearch = async (newQuery) => {
	// 	setQuery(newQuery)
	// }

	const getLocalTime = (time) => {
		moment.locale('uk')
		return moment(time).format('HH:mm')
	}

	const getUserCity = async () => {
		setIsLoading(true)
		const city = await getUserLocation()
		if (city !== location.name) {
			setQuery(city)
		}
		setIsLoading(false)
		return
	}

	useEffect(() => {
		// async function fetchData() {
		// 	const userCity = await getUserLocation()
		// 	setQuery(userCity)
		// setIsLoading(false)
		// }
		// fetchData()
		// setIsLoading(true)
	}, [])

	useEffect(() => {
		async function fetchData() {
			const response = await getWeather(query)
			console.log(response)
			setWeather(response.current)
			setLocation(response.location)
			setForecast(response.forecast.forecastday[0])
			setIsLoading(false)
		}
		if (query.trim() !== '') {
			fetchData()
			setIsLoading(true)
		}
	}, [query])

	return (
		<>
			<>
				<CurrentWeather
					current={weather}
					location={location}
					forecast={forecast}
					getLocalTime={getLocalTime}
					onSearch={setQuery}
					isLoading={isLoading}
					getUserCity={getUserCity}
				/>
				{/* <ForecastWeather forecast={forecast} getLocalTime={getLocalTime} /> */}
			</>
		</>
	)
}

export default App
