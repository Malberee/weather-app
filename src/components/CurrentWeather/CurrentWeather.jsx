import React from 'react'
import PropTypes from 'prop-types'
import {
	CurrentWeatherWrapper,
	Location,
	Text,
	SolarCycle,
	WeatherWrapper,
	Temp,
	Weather,
	ToggleTempMeasure,
	ToggleTempMeasureContainer,
} from './CurrentWeather.styled'
import Searchbar from '../Searchbar'
import * as Icon from '../Icons'

const CurrentWeather = ({ current, location, getLocalTime }) => {
	const getWeatherIcon = (weather, isDay) => {
		if (isDay) {
			switch (weather) {
				case 'Clear':
					return (
						<>
							<SunnyClear />
							<p>{weather}</p>
						</>
					)
					break

				default:
					break
			}
		}
		if (!isDay) {
			switch (weather) {
				case 'Clear':
					return (
						<>
							<NightClear />
							<p>{weather}</p>
						</>
					)
					break
				case 'Sunny':
					return (
						<>
							<NightCloudyless />
							<p>{weather}</p>
						</>
					)
					break
				default:
					break
			}
		}
		return <SunnyClear />
	}

	return (
		<CurrentWeatherWrapper>
			<Searchbar />
			<Location>
				<Text>[ICON] [CITY]</Text>
				<Text>Local time: [TIME]</Text>
			</Location>

			{/* ICON */}
			<SolarCycle>
				<Text>[ICON] [TIME]</Text>
				<Text>[ICON] [TIME]</Text>
			</SolarCycle>
			<WeatherWrapper>
				<Text>[HUMIDITY]</Text>
				<Temp>[TEMP] [℃/℉]</Temp>
				<Weather>[WEATHER]</Weather>
			</WeatherWrapper>

			<ToggleTempMeasureContainer>
				<input type="checkbox" />
				<ToggleTempMeasure measure="F"></ToggleTempMeasure>
			</ToggleTempMeasureContainer>
		</CurrentWeatherWrapper>
	)
}

CurrentWeather.propTypes = {
	current: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
}

CurrentWeather.defaultProps = {}

export default CurrentWeather
