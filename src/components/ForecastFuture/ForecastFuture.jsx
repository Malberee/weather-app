import React from 'react'
import PropTypes from 'prop-types'
import { Droplet } from '../Icons'
import { getWeatherIcon } from '../../services/getWeatherIcon'
import Title from '../Title'
import IconWrapper from '../IconWrapper'
import {
	ForecastFutureList,
	ForecastFutureItem,
	WeatherIconWrapper,
	Weather,
	Text,
} from './ForecastFuture.styled'
import { DateTime } from 'luxon'

const ForecastFuture = ({ weather: { daily }, measure }) => {
	const getDayOfWeek = (time) => {
		return DateTime.fromSeconds(time).weekdayLong
	}

	return (
		<ForecastFutureList>
			{daily.slice(1, 4).map(({ dt, weather, temp, humidity }) => (
				<ForecastFutureItem key={dt}>
					<WeatherIconWrapper>
						<div>{getWeatherIcon(weather[0].icon, 150)}</div>
					</WeatherIconWrapper>
					<div>
						<Title size="30">{getDayOfWeek(dt)}</Title>
						<Text>{weather[0].main}</Text>
					</div>
					<Weather>
						<Text>
							Max
							{measure === 'C'
								? ` ${Math.round(temp.max)}°C`
								: ` ${Math.round((temp.max * 9) / 5 + 32)}°F`}
						</Text>
						<Text>
							Min
							{measure === 'C'
								? ` ${Math.round(Math.round(temp.min))}°C`
								: ` ${Math.round((temp.min * 9) / 5 + 32)}°F`}
						</Text>
						<Text>
							<IconWrapper>
								<Droplet />
							</IconWrapper>
							{humidity}%
						</Text>
					</Weather>
				</ForecastFutureItem>
			))}
		</ForecastFutureList>
	)
}

ForecastFuture.propTypes = {}

ForecastFuture.defaultProps = {}

export default ForecastFuture
