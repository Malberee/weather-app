import styled from 'styled-components'

export const ForecastWeatherWrapper = styled.div`
	height: 762px;
	/* width: 759px; */
	border-radius: 0px 30px 30px 0px;
	background-color: #282828;
	padding: 16px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const HourForecastList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
`

export const HourForecastItem = styled.li`
	background-color: #e2e2e2;

	padding: 5px;
`
