import React from 'react'
import PropTypes from 'prop-types'
import { CurrentWeatherWrapper } from './CurrentWeather.styled'
import {
	SunnyClear,
	SunnyCloudyless,
	SunnyCloudy,
	Cloudy,
	Rain,
	Thunder,
	CloudyRainny,
	HeavyrainStorm,
	NightCloudy,
	NightCloudyless,
	NightClear,
	FullMoon,
	NightRain,
} from '../Icon'

const CurrentWeather = ({ current, location }) => {
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
	}

	const getLocalTime = (time) => {
		const epochToDate = new Date(time * 1000)
		return epochToDate.toLocaleTimeString()
	}

	return (
		<CurrentWeatherWrapper>
			{getWeatherIcon(current.condition.text, location.is_day)}
			<h1>{current.temp_c}℃</h1>
			<h3>
				{location.country}, {location.name}
			</h3>
			<p>
				Local time <span>{getLocalTime(location.localtime_epoch)}</span>
			</p>
		</CurrentWeatherWrapper>
	)
}

CurrentWeather.propTypes = {
	current: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
}

CurrentWeather.defaultProps = {}

export default CurrentWeather
