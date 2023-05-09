import { useState, useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { getWeather } from '../services/getWeather'
import axios from 'axios'
import './App.scss'
import Searchbar from './Searchbar'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const App = () => {
	const [query, setQuery] = useState('')
	const [location, setLocation] = useState({})
	const [weather, setWeather] = useState({})
	const [forecast, setForecast] = useState({})

	const onFormSubmit = async (e) => {
		e.preventDefault()
		setQuery(e.currentTarget.elements.query.value)
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
			<Searchbar onFormSubmit={onFormSubmit} />
			{Object.keys(weather).length > 0 && (
				<CurrentWeather current={weather} location={location} />
			)}
			<ForecastWeather forecast={forecast} />
		</>
	)
}

export default App
