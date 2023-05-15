import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCities } from '../../services/getCities'
import { Search, Target } from '../Icons'
import {
	SearchbarWrapper,
	SubmitButton,
	TargetButton,
	SearchField,
} from './Searchbar.styled'

const Searchbar = ({ onSearch, getUserCity }) => {
	const [query, setQuery] = useState('')
	const [citiesAutocomplete, setCitiesAutocomplete] = useState([])

	useEffect(() => {
		async function fetchData() {
			const cities = await getCities(query)
			setCitiesAutocomplete(cities)
		}
		query.trim() && fetchData()
	}, [query])

	useEffect(() => {
		console.log(citiesAutocomplete)
	}, [citiesAutocomplete])

	return (
		<SearchbarWrapper
			onSubmit={(e) => {
				e.preventDefault()
				onSearch(query)
			}}
		>
			<SearchField
				items={citiesAutocomplete}
				placeholder="City"
				resultStringKeyName="title"
				fuseOptions={{ keys: ['title'] }}
				inputDebounce={0}
				onSearch={(newQuery) => setQuery(newQuery)}
				onSelect={(item) => {
					setQuery(item.title)
					onSearch(item.title)
				}}
				showIcon={false}
				showClear={false}
				styling={{
					width: '100%',
					height: '30px',
					hoverBackgroundColor: '#ffffff10',
					borderRadius: '14px',
					border: '0.5px solid #545454',
					backgroundColor: 'rgba(40, 40, 40, 0.6)',
					backdropFilter: 'blur(2px)',
					color: 'white',
				}}
			/>
			<SubmitButton type="submit">
				<Search width={17} />
			</SubmitButton>
			<TargetButton type="button" onClick={() => getUserCity()}>
				<Target width={17} />
			</TargetButton>
		</SearchbarWrapper>
	)
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
