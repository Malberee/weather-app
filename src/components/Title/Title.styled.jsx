import styled from 'styled-components'

export const H2 = styled.h2`
	background: linear-gradient(
		180deg,
		#ffffff 0%,
		rgba(255, 255, 255, 0.5) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-size: ${props => props.size}px;
`
