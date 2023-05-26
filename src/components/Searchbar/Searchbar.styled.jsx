import styled from 'styled-components'

export const SearchbarWrapper = styled.form`
	position: relative;
`

export const SubmitButton = styled.button`
	position: absolute;
	top: 8px;
	left: 8px;
	border: transparent;
	background-color: transparent;
	cursor: pointer;
	width: 16px;
	height: 16px;
`

export const TargetButton = styled.button`
	position: absolute;
	top: 8px;
	right: 8px;
	border: transparent;
	background-color: transparent;
	cursor: pointer;
	width: 16px;
	height: 16px;
`

export const SearchField = styled.input`
	/* .wrapper {
		&:hover,
		&:focus-within {
			box-shadow: none;
		}
		div {
			ul {
				li {
					cursor: pointer;
				}
			}
		}
	} */

	background: rgba(40, 40, 40, 0.3);
	border: 0.5px solid #545454;
	backdrop-filter: blur(2px);
	color: white;

	border-radius: 14px;
	width: 100%;
	height: 33px;
	box-sizing: border-box;
	padding: 8px;
	padding-left: 29px;

	&:focus {
		outline: transparent;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		-webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
		-webkit-transition-delay: 9999s;
	}
`

export const AutocompleteItem = styled.span`
	&:hover {
		background-color: transparent;
	}
`
