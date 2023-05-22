import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
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
	weather: { current, location, forecast },
	getLocalTime,
	measure,
}) => {

	const convertTime12to24 = (time12h) => {
		return moment(time12h, ['h:mm A']).format('HH:mm')
	}

	return (
		<>
			<LocationWrapper>
				<LocationText>
					<IconWrapper>
						<Location width="27" />
					</IconWrapper>
					{location.country}, {location.name}
				</LocationText>
				<LocationText>Local time: {getLocalTime(location.localtime)}</LocationText>
			</LocationWrapper>
			<CurrentWeatherIconWrapper>
				<div>{getWeatherIcon(current.condition.text, current.is_day)}</div>
			</CurrentWeatherIconWrapper>
			<SolarCycle>
				<Text>
					<IconWrapper>
						<Sunrise width="27" />
					</IconWrapper>
					{convertTime12to24(forecast[0].astro.sunrise)}
				</Text>
				<Text>
					<IconWrapper>
						<Sunset width="27" />
					</IconWrapper>
					{convertTime12to24(forecast[0].astro.sunset)}
				</Text>
			</SolarCycle>
			<WeatherWrapper>
				<Temp>
					{measure === 'C'
						? `${Math.round(current.temp_c)}°C`
						: `${Math.round(current.temp_f)}°F`}
				</Temp>
				<Title size="30">{current.condition.text}</Title>
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
