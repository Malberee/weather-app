import { useState } from 'react'
import PropTypes from 'prop-types'
import { SearchbarWrapper } from './Searchbar.styled'

const Searchbar = ({ onFormSubmit }) => {
	const [query, setQuery] = useState('')

	return (
		<SearchbarWrapper>
			<form onSubmit={onFormSubmit}>
				<button type="submit">Search</button>
				<input type="text" name="query" onChange={e => setQuery(e.target.value)} />
            </form>
		</SearchbarWrapper>
	)
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
