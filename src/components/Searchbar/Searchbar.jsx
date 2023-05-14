import { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getUserLocation } from '../../services/getUserLocation'
import { getCities } from '../../services/getCities'
import { Search, Target } from '../Icons'
import {
	SearchbarWrapper,
	SubmitButton,
	TargetButton,
	SearchField,
	AutocompleteItem
} from './Searchbar.styled'

const Searchbar = ({ onSearch }) => {
	const [query, setQuery] = useState('')
	const [citiesAutocomplete, setCitiesAutocomplete] = useState([])

	const onInputChange = async (string) => {
		setQuery(string)
		const cities = await getCities(string)
		setCitiesAutocomplete(cities)
	}

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
				inputDebounce={0}
				onSearch={onInputChange}
				onSelect={(item) => {
					console.log(item.title)
					setQuery(item.title)
					onSearch(item.title)
				}}
				formatResult={item => (<AutocompleteItem>{item.title}</AutocompleteItem>)}
				showIcon={false}
				showClear={false}
				styling={{
					width: '100%',
					height: '30px',
					// background:
					// 	'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%)',
					// webkitBackgroundClip: 'text',
					// webkitTextFillColor: 'transparent',

					hoverBackgroundColor: '#ffffff10',

					borderRadius: '14px',
					border: '0.5px solid #545454',
					backgroundColor: 'rgba(40, 40, 40, 0.6)',
					backdropFilter: 'blur(2px)',
					color: 'white',
				}}
			/>
			{/* <SearchField
				type="text"
				name="query"
				placeholder="City"
				onChange={onInputChange}
			/> */}
			<SubmitButton type="submit">
				<Search width={17} />
			</SubmitButton>
			<TargetButton
				type="button"
				onClick={async () => {
					const userCity = await getUserLocation()
					onSearch(userCity)
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
