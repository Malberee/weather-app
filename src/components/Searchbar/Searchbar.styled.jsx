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
	width: 100%;
	box-sizing: border-box;
	padding: 8px;
	padding-left: 29px;
	border-radius: 14px;

	border: 0.5px solid #545454;
	background: rgba(40, 40, 40, 0.3);
	backdrop-filter: blur(2px);
	color: white;

	&:focus {
		outline: transparent;
	}
`
