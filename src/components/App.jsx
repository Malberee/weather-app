import { useState, useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { getWeather } from '../services/getWeather'
import { getUserLocation } from '../services/getUserLocation'
import moment from 'moment'
import ukLocale from 'moment/locale/uk'
import './App.scss'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const App = () => {
	const [query, setQuery] = useState('')
	const [location, setLocation] = useState()
	const [current, setCurrent] = useState()
	const [forecast, setForecast] = useState([])
	const [measure, setMeasure] = useState(
		localStorage.getItem('measure') === null
			? 'C'
			: localStorage.getItem('measure') === 'C'
			? 'C'
			: 'F'
	)
	const [isLoading, setIsLoading] = useState(false)

	const toggleMeasure = () => {
		setMeasure((prevState) => (prevState === 'C' ? 'F' : 'C'))
	}

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
			setCurrent(response.current)
			setLocation(response.location)
			setForecast(response.forecast.forecastday.slice(1)) // Slice убрать когда закончится пробный период на платный тарифный план
			setIsLoading(false)
		}
		if (query.trim() !== '') {
			fetchData()
			setIsLoading(true)
		}
	}, [query])

	return (
		<>
			<CurrentWeather
				current={current}
				location={location}
				forecast={forecast[0]}
				getLocalTime={getLocalTime}
				onSearch={setQuery}
				isLoading={isLoading}
				getUserCity={getUserCity}
				measure={measure}
				toggleMeasure={toggleMeasure}
			/>
			<ForecastWeather
				forecast={forecast}
				getLocalTime={getLocalTime}
				measure={measure}
			/>
		</>
	)
}

export default App
