import { useState, useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { getWeather } from '../services/getWeather'
import { getUserLocation } from '../services/getUserLocation'
import moment from 'moment'
import ukLocale from 'moment/locale/uk'
import './App.scss'
import Sidebar from './Sidebar'
import ForecastWeather from './ForecastWeather'

const App = () => {
	const [query, setQuery] = useState('')
	const [weather, setWeather] = useState()
	const [measure, setMeasure] = useState(
		localStorage.getItem('measure') === null
			? 'C'
			: localStorage.getItem('measure') === 'C'
			? 'C'
			: 'F'
	)
	const [isLoading, setIsLoading] = useState(false)

	const getLocalTime = (time) => {
		moment.locale('uk')
		return moment(time).format('HH:mm')
	}

	const getUserCity = async () => {
		setIsLoading(true)
		const city = await getUserLocation()
		if (!weather || city !== weather.location.name) {
			setQuery(city)
		}
		setIsLoading(false)
		return
	}

	useEffect(() => {
		localStorage.setItem('measure', measure)
	}, [measure])

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
			setWeather({current: response.current, forecast: response.forecast.forecastday, location: response.location})
			setIsLoading(false)
		}
		if (query.trim() !== '') {
			fetchData()
			setIsLoading(true)
		}
	}, [query])

	return (
		<>
			<Sidebar
				weather={weather}
				getLocalTime={getLocalTime}
				onSearch={setQuery}
				isLoading={isLoading}
				getUserCity={getUserCity}
				measure={measure}
				toggleMeasure={setMeasure}
			/>
			<ForecastWeather
				weather={weather}
				getLocalTime={getLocalTime}
				measure={measure}
				isLoading={isLoading}
			/>
		</>
	)
}

export default App
