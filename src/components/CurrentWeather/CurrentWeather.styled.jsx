import styled from 'styled-components'

export const CurrentWeatherWrapper = styled.div`
	width: 436px;
	height: 762px;
	background: rgba(40, 40, 40, 0.5);
	border: 1px solid #545454;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(7.5px);
	border-radius: 30px 0px 0px 30px;
	color: white;
	padding: 16px;
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const LocationWrapper = styled.div`
	text-align: center;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
`

export const LocationText = styled.p`
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
`

export const Text = styled.p`
	margin-top: 12px;

	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
`

export const CurrentWeatherIconWrapper = styled.div`
	/* width: 200px; */
	height: 270px;
	margin-top: 14px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`


export const SolarCycle = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 64px;

	margin-bottom: 12px;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
`

export const WeatherWrapper = styled.div`
	text-align: center;
	font-weight: 600;
`

export const Temp = styled.h2`
	display: inline-block;

	font-weight: 700;
	font-size: 50px;
	line-height: 61px;
`
