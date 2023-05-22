import styled from 'styled-components'

export const ForecastFutureList = styled.ul``

export const ForecastFutureItem = styled.li`
	width: 727px;
	padding: 14px;
	padding-right: 45px;
	border-radius: 14px;

	color: white;
	background-color: #1b1b1b;

	display: flex;
	align-items: center;
	gap: 30px;

	&:not(:last-child) {
		margin-bottom: 16px;
	}
`

export const WeatherIconWrapper = styled.div`
	max-height: 110px;
	
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Weather = styled.div`
	text-align: center;
	margin-left: auto;
	margin-right: 0;
`

export const Text = styled.p`
	margin-top: 12px;
	text-align: left;

	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
`
