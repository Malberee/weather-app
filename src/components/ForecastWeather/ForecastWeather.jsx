import React from 'react'
import PropTypes from 'prop-types'
import ForecastFuture from '../ForecastFuture'
import ForecastDay from '../ForecastDay/ForecastDay'
import { Droplet } from '../Icons'
import {
	ForecastWeatherWrapper,
	HourForecastList,
	HourForecastItem,
} from './ForecastWeather.styled'

const ForecastWeather = ({ forecast, getLocalTime, measure }) => (
	<ForecastWeatherWrapper>
		<ForecastFuture forecast={forecast} measure={measure} />
		<ForecastDay forecast={forecast} getLocalTime={getLocalTime} measure={ measure} />
	</ForecastWeatherWrapper>
)

ForecastWeather.propTypes = {}

ForecastWeather.defaultProps = {}

export default ForecastWeather
