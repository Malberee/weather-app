import { useState, useEffect } from 'react'
import PropTypes, { func } from 'prop-types'
import { AsyncPaginate } from 'react-select-async-paginate'
import { getCities, getUserLocation } from '../../services/api'
import { Search, Target } from '../Icons'
import {
	SearchField,
	SearchbarWrapper,
	SubmitButton,
	TargetButton,
} from './Searchbar.styled'

const Searchbar = ({ onSearch }) => {
	const [query, setQuery] = useState('')
	// const [citiesAutocomplete, setCitiesAutocomplete] = useState([])

	// useEffect(() => {
	// 	console.log(citiesAutocomplete)
	// }, [citiesAutocomplete])

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const cities = await getCities(query)
	// 		setCitiesAutocomplete(cities)
	// 	}

	// 	fetchData()
	// }, [query])

	return (
		<SearchbarWrapper
			onSubmit={(e) => {
				e.preventDefault()
				onSearch(query)
			}}
		>
			<SearchField type="text" onChange={(e) => setQuery(e.target.value)} />
			<SubmitButton type="submit">
				<Search width={17} />
			</SubmitButton>
			<TargetButton
				type="button"
				onClick={async () => {
					const city = await getUserLocation()
					onSearch(city)
				}}
			>
				<Target width={17} />
			</TargetButton>
		</SearchbarWrapper>
	)
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
