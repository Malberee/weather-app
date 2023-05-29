import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Droplet } from '../Icons'
import { getWeatherIcon } from '../../services/getWeatherIcon'
import Title from '../Title'
import IconWrapper from '../IconWrapper'
import {
	ForecastDailyList,
	ForecastDailyItem,
	WeatherIconWrapper,
	Weather,
	Text,
} from './ForecastDaily.styled'

const ForecastDaily = ({ forecast, selectedDay, setSelectedDay, measure }) => {
	const getDayOfWeek = (date) => {
		const currentWeekday = moment(Date.now()).format('dddd')
		const weekday = moment(date).format('dddd')

		if (currentWeekday === weekday) return 'Today'
		return weekday
	}

	return (
		<ForecastDailyList>
			{forecast.map(
				(
					{
						date,
						day: {
							avghumidity,
							maxtemp_c,
							mintemp_c,
							maxtemp_f,
							mintemp_f,
							condition,
						},
					},
					index
				) => (
					<ForecastDailyItem
						key={date}
						isSelected={index === selectedDay ? true : false}
						onClick={() => setSelectedDay(index)}
					>
						<WeatherIconWrapper>
							<div>{getWeatherIcon(condition.text, true, 150)}</div>
						</WeatherIconWrapper>
						<div>
							<Title size="30">{getDayOfWeek(date)}</Title>
							<Text>{condition.text}</Text>
						</div>
						<Weather>
							<Text>
								Max
								{measure === 'C'
									? ` ${Math.round(maxtemp_c)}°C`
									: ` ${Math.round(maxtemp_f)}°F`}
							</Text>
							<Text>
								Min
								{measure === 'C'
									? ` ${Math.round(mintemp_c)}°C`
									: ` ${Math.round(mintemp_f)}°F`}
							</Text>
							<Text>
								<IconWrapper>
									<Droplet />
								</IconWrapper>
								{avghumidity}%
							</Text>
						</Weather>
					</ForecastDailyItem>
				)
			)}
		</ForecastDailyList>
	)
}

ForecastDaily.propTypes = {}

ForecastDaily.defaultProps = {}

export default ForecastDaily
