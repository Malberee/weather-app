import { useState } from 'react'
import PropTypes from 'prop-types'
import { Search, Target } from '../Icons'

import {
	SearchbarWrapper,
	SubmitButton,
	TargetButton,
	SearchField,
} from './Searchbar.styled'

const Searchbar = ({ onFormSubmit }) => {
	const [query, setQuery] = useState('')

	return (
		<SearchbarWrapper
			onSubmit={(e) => {
				e.preventDefault()
				onFormSubmit(query)
			}}
		>
			<SearchField
				type="text"
				name="query"
				placeholder="City"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<SubmitButton type="submit">
				<Search width={17} />
			</SubmitButton>
			<TargetButton type="button">
				<Target width={17} />
			</TargetButton>
		</SearchbarWrapper>
	)
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
