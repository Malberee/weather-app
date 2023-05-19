import React from 'react'
import PropTypes from 'prop-types'
import IconWrapper from '../IconWrapper'
import {
	ForecastDayWrapper,
	ForecastDayList,
	ForecastDayItem,
} from './ForecastDay.styled'
import { getWeatherIcon } from '../../services/getWeatherIcon'

const ForecastDay = ({ forecast, getLocalTime, measure }) => {
	const formattedForecast = forecast[0].hour.filter((hour) => {
		const time = new Date(hour.time_epoch).getTime()
		const currentTime = new Date(Date.now()).getTime()
		console.log('T' + time)
		console.log('C' + currentTime)
		if (time > currentTime) {
			return hour
		}
	})

	return (
		<ForecastDayWrapper>
			<h2>Today</h2>
			<ForecastDayList>
				{formattedForecast.map(
					({ time, is_day, temp_c, temp_f, condition }) => (
						<ForecastDayItem key={time}>
							<p>{getLocalTime(time)}</p>
							<IconWrapper>
								{getWeatherIcon(condition.text, is_day, 50)}
							</IconWrapper>
							<h3>{measure === 'C' ? `${temp_c}°C` : `${temp_f}°F`}</h3>
							<p>{condition.text}</p>
						</ForecastDayItem>
					)
				)}
			</ForecastDayList>
		</ForecastDayWrapper>
	)
}

ForecastDay.propTypes = {}

ForecastDay.defaultProps = {}

export default ForecastDay
