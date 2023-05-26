import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getWeatherIcon } from '../../services/getWeatherIcon'
import Title from '../Title'
import IconWrapper from '../IconWrapper'
import {
	CurrentWeatherWrapper,
	LocationWrapper,
	LocationText,
	SolarCycle,
	WeatherWrapper,
	Temp,
	Text,
	CurrentWeatherIconWrapper,
} from './CurrentWeather.styled'
import { Location, Sunset, Sunrise, Droplet } from '../Icons'

const CurrentWeather = ({
	weather: { current, daily, hourly, timezone },
	formatToLocalTime,
	measure,
}) => {
	return (
		<>
			<LocationWrapper>
				{/* <LocationText>
					<IconWrapper>
						<Location width="27" />
					</IconWrapper>
					{location.country}, {location.name}
				</LocationText> */}
				<LocationText>
					Local time: {formatToLocalTime(current.dt, timezone)}
				</LocationText>
			</LocationWrapper>
			<CurrentWeatherIconWrapper>
				{/* <div>{getWeatherIcon(current.condition.text, current.is_day)}</div> */}
			</CurrentWeatherIconWrapper>
			<SolarCycle>
				<Text>
					<IconWrapper>
						<Sunrise width="27" />
					</IconWrapper>
					{formatToLocalTime(current.sunrise, timezone)}
				</Text>
				<Text>
					<IconWrapper>
						<Sunset width="27" />
					</IconWrapper>
					{formatToLocalTime(current.sunset, timezone)}
				</Text>
			</SolarCycle>
			<WeatherWrapper>
				<Temp>
					{measure === 'C'
						? ` ${Math.round(current.temp)}°C`
						: ` ${Math.round((current.temp * 9) / 5 + 32)}°F`}
				
				</Temp>
				<Title size="30">{current.weather[0].main}</Title>
				<Text>
					<IconWrapper>
						<Droplet width="27" />
					</IconWrapper>
					{current.humidity}%
				</Text>
			</WeatherWrapper>
		</>
	)
}

CurrentWeather.propTypes = {
	// current: PropTypes.object.isRequired,
	// location: PropTypes.object.isRequired,
}

CurrentWeather.defaultProps = {}

export default CurrentWeather
