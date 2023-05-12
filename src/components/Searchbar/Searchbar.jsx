import { useState } from 'react'
import PropTypes from 'prop-types'
import { Search, Droplet, Location, Target, Sunrise, Sunset } from '../Icons'

import { SearchbarWrapper, SubmitButton, SearchField } from './Searchbar.styled'

const Searchbar = ({ onFormSubmit }) => {
	const [query, setQuery] = useState('')

	return (
		<SearchbarWrapper onSubmit={onFormSubmit}>
			<SearchField
				type="text"
				name="query"
				placeholder="City"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<SubmitButton type="submit">
				<Search width={16}/>
			</SubmitButton>
		</SearchbarWrapper>
	)
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
