import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { getWeatherIcon } from '../../services/getWeatherIcon'
import IconWrapper from '../IconWrapper'
import {
	ForecastFutureList,
	ForecastFutureItem,
	WeatherIconWrapper,
	DayOfWeek,
	Weather,
	Text,
} from './ForecastFuture.styled'
import { Droplet } from '../Icons'

const ForecastFuture = ({ forecast, measure }) => {
	const getDayOfWeek = (date) => {
		const day = new Date(date)
		return moment(day).format('dddd')
	}

	return (
		<ForecastFutureList>
			{forecast.slice(1).map(({ date, date_epoch, day }) => (
				<ForecastFutureItem key={date_epoch}>
					<WeatherIconWrapper>
						<div>{getWeatherIcon(day.condition.text, true, 150)}</div>
					</WeatherIconWrapper>
					<div>
						<DayOfWeek>{getDayOfWeek(date)}</DayOfWeek>
						<Text>{day.condition.text}</Text>
					</div>
					<Weather>
						<Text>
							Max
							{measure === 'C'
								? ` ${Math.trunc(day.maxtemp_c)}°C`
								: ` ${Math.trunc(day.maxtemp_f)}°F`}
						</Text>
						<Text>
							Min
							{measure === 'C'
								? ` ${Math.trunc(day.mintemp_c)}°C`
								: ` ${Math.trunc(day.mintemp_f)}°F`}
						</Text>
						<Text>
							<IconWrapper>
								<Droplet />
							</IconWrapper>
							{day.avghumidity}%
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
