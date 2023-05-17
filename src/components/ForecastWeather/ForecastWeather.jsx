import React from 'react'
import PropTypes from 'prop-types'
import ForecastFuture from '../ForecastFuture'
import { Droplet } from '../Icons'
import {
	ForecastWeatherWrapper,
	HourForecastList,
	HourForecastItem,
} from './ForecastWeather.styled'

const ForecastWeather = ({ forecast, getLocalTime, measure }) => (
	<ForecastWeatherWrapper>
		<ForecastFuture forecast={forecast} measure={measure} />
	</ForecastWeatherWrapper>
)

ForecastWeather.propTypes = {}

ForecastWeather.defaultProps = {}

export default ForecastWeather
