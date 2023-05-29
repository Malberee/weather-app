import { useState, useEffect } from 'react'
import moment from 'moment'
import ukLocale from 'moment/locale/uk'
import { getWeather, getUserLocation } from '../services/api'
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

	const formatToLocalTime = (time) => {
		moment.locale('uk')
		return moment(time).format('HH:mm')
	}

	useEffect(() => {
		localStorage.setItem('measure', measure)
	}, [measure])

	useEffect(() => {
		async function fetchData() {
			const userCity = await getUserLocation()
			setQuery(userCity)
			setIsLoading(false)
		}
		fetchData()
		setIsLoading(true)
	}, [])

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await getWeather(query)
				console.log(response)
				setWeather(response)
			} catch (err) {
				alert(err)
			} finally {
				setIsLoading(false)
			}
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
				formatToLocalTime={formatToLocalTime}
				onSearch={setQuery}
				isLoading={isLoading}
				measure={measure}
				toggleMeasure={setMeasure}
			/>
			<ForecastWeather
				weather={weather}
				formatToLocalTime={formatToLocalTime}
				measure={measure}
				isLoading={isLoading}
			/>
		</>
	)
}

export default App
