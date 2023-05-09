import { useState, useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { getWeather } from '../services/getWeather'
import axios from 'axios'
import './App.scss'
import Searchbar from './Searchbar'

const App = () => {
	const [query, setQuery] = useState('')

	const onFormSubmit = async (e) => {
		e.preventDefault()
		setQuery(e.currentTarget.elements.query.value)
	}

	useEffect(() => {
		async function fetchData() {
			const response = await getWeather(query)
			console.log(response)
		}
		if (query !== '') {
			fetchData()
		}
	}, [query])

	return (
		<>
			<Searchbar onFormSubmit={onFormSubmit} />
		</>
	)
}

export default App
