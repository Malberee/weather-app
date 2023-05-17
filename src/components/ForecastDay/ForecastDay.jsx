import React from 'react'
import PropTypes from 'prop-types'
import IconWrapper from '../IconWrapper'
import {
	ForecastDayWrapper,
	ForecastDayList,
	ForecastDayItem,
} from './ForecastDay.styled'
import { getWeatherIcon } from '../../services/getWeatherIcon'

const ForecastDay = ({ forecast, getLocalTime, measure }) => (
	<ForecastDayWrapper>
		<h2>Today</h2>
		<ForecastDayList>
			{forecast[0].hour.map(({ time, is_day, temp_c, temp_f, condition }) => (
				<ForecastDayItem>
					<p>{getLocalTime(time)}</p>
					<IconWrapper>
						{getWeatherIcon(condition.text, is_day, 50)}
					</IconWrapper>
                    <h3>{measure === 'C' ? `${temp_c}°C` : `${temp_f}°F`}</h3>
                    <p>{ condition.text}</p>
				</ForecastDayItem>
			))}
		</ForecastDayList>
	</ForecastDayWrapper>
)

ForecastDay.propTypes = {}

ForecastDay.defaultProps = {}

export default ForecastDay
