import { useState, useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { getWeather } from '../services/getWeather'
import axios from 'axios'
import './App.scss'
import CurrentWeather from './CurrentWeather'
// import ForecastWeather from './ForecastWeather'

const App = () => {
	const [query, setQuery] = useState('')
	const [location, setLocation] = useState({})
	const [weather, setWeather] = useState({})
	const [forecast, setForecast] = useState({})

	const onFormSubmit = async (e) => {
		e.preventDefault()
		setQuery(e.currentTarget.elements.query.value)
	}

	const getLocalTime = (time) => {
		const epochToDate = new Date(time * 1000)
		return epochToDate.toLocaleTimeString()
	}

	useEffect(() => {
		async function fetchData() {
			const response = await getWeather(query)
			console.log(response)
			setWeather(response.current)
			setLocation(response.location)
			setForecast(response.forecast.forecastday[0])
		}
		if (query !== '') {
			fetchData()
		}
	}, [query])

	return (
		<>
				<>
					<CurrentWeather
						current={weather}
						location={location}
						getLocalTime={getLocalTime}
					/>
					{/* <ForecastWeather forecast={forecast} getLocalTime={getLocalTime} /> */}
				</>
		</>
	)
}

export default App
