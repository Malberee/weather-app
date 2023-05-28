import styled from 'styled-components'

export const ForecastDailyList = styled.ul``

export const ForecastDailyItem = styled.li`
	width: 727px;
	padding: 14px;
	padding-right: 64px;
	border-radius: 14px;
	border: 1px solid transparent;

	color: white;
	background-color: #1b1b1b;
	${(props) => props.isSelected && 'border-color: rgba(255, 255, 255, 0.5)'};
	
	&:hover,
	&:focus {
		border-color: rgba(255, 255, 255, 0.2);
	}


	display: flex;
	align-items: center;
	gap: 30px;

	&:not(:last-child) {
		margin-bottom: 16px;
	}

	cursor: pointer;

	transition: border-color 150ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
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
