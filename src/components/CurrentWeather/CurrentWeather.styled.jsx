import styled from 'styled-components'

export const CurrentWeatherWrapper = styled.div`
	width: 436px;
	height: 762px;
	background: rgba(40, 40, 40, 0.4);
	border: 1px solid #545454;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(7.5px);
	border-radius: 30px 0px 0px 30px;
	color: white;
	padding: 16px;
`

export const Location = styled.div`
	text-align: center;
`

export const Text = styled.p`
	background: linear-gradient(
		180deg,
		#ffffff 0%,
		rgba(255, 255, 255, 0.5) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

export const SolarCycle = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 64px;
`

export const WeatherWrapper = styled.div`
	text-align: center;
`

export const Temp = styled.h2`
	display: inline-block;
	background: linear-gradient(
		180deg,
		#ffffff 0%,
		rgba(255, 255, 255, 0.5) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

export const Weather = styled.h3`
	background: linear-gradient(
		180deg,
		#ffffff 0%,
		rgba(255, 255, 255, 0.5) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

export const ToggleTempMeasureContainer = styled.label`
	display: block;
	width: 64px;
	height: 32px;
	cursor: pointer;
	background-color: #282828;
	border-radius: 32px;
	& input {
		position: absolute;
		visibility: hidden;
	}

	& input:checked + span::after {
		transform: translate(100%, -50%) scale(0.8);
	}
`

export const ToggleTempMeasure = styled.span`
	position: relative;
	display: block;
	height: 32px;
	&::after {
		position: absolute;
		top: 50%;
		transform: translateY(-50%) scale(0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		content: '${(props) => props.measure}';
		color: black;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: white;

		transition: transform 50ms linear;
	}
`
