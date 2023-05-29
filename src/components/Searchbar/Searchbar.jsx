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
	const [selectedCity, setSelectedCity] = useState()

	const loadOptions = async (value) =>
		value ? await getCities(value) : { options: [] }

	const onInputChange = (inputValue, action) => {
		if (action.action !== 'input-blur' && action.action !== 'menu-close') {
			setQuery(inputValue)
		}
	}

	useEffect(() => {
		if (selectedCity) {
			console.log(selectedCity.value)
			onSearch(selectedCity.value)
		}
	}, [selectedCity])

	const styles = {
		placeholder: (styles) => ({
			...styles,
			fontSize: '14px',
			textAlign: 'left',
			padding: '0 33px',
			margin: '0',
			color: 'rgba(255, 255, 255, 0.35)',
		}),
		input: (styles) => ({
			...styles,
			fontSize: '14px',
			padding: '0 33px',
			margin: '0',
			color: 'white',
			width: 'auto',
		}),
		control: (styles) => ({
			...styles,
			backgroundColor: 'rgba(40, 40, 40, 0.3)',
			backdropFilter: 'blur(2px)',
			border: '0.5px solid #545454',
			':hover': {
				border: '0.5px solid #545454',
			},
			':focus': {
				border: '0.5px solid #545454',
			},
			boxShadow: 'none',
			borderRadius: '14px',
			minHeight: '33px',
			cursor: 'text',
		}),
		valueContainer: (styles) => ({
			...styles,
			padding: '0',
		}),
		singleValue: (styles) => ({
			...styles,
			color: 'transparent',
		}),
		option: (styles, { isSelected, isFocused, isDisabled }) => {
			let backgroundColor

			if (isFocused) backgroundColor = 'rgba(80, 80, 80, 0.4)'

			if (isSelected) backgroundColor = 'rgba(80, 80, 80, 0.4)'

			if (isSelected) backgroundColor = 'rgba(80, 80, 80, 0.4)'
			return {
				...styles,
				backgroundColor: backgroundColor,
				':active': {
					backgroundColor: (backgroundColor = 'rgba(80, 80, 80, 0.6)'),
				},
			}
		},
		menu: (styles) => ({
			...styles,
			overflow: 'hidden',
			backgroundColor: 'rgba(40, 40, 40, 0.3)',
			backdropFilter: 'blur(2px)',
			border: '0.5px solid #545454',
			borderRadius: '14px',
		}),
	}

	return (
		<SearchbarWrapper
			onSubmit={(e) => {
				e.preventDefault()
				onSearch(query)
			}}
		>
			<AsyncPaginate
				placeholder="City"
				noOptionsMessage={() => 'Nothing was found.'}
				debounceTimeout={500}
				inputValue={query}
				onInputChange={onInputChange}
				onChange={setSelectedCity}
				loadOptions={loadOptions}
				openMenuOnFocus={query ? true : false}
				components={{
					DropdownIndicator: () => null,
					IndicatorSeparator: () => null,
					LoadingIndicator: () => null,
				}}
				controlShouldRenderValue={false}
				// unstyled={true}
				styles={styles}
			/>
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
