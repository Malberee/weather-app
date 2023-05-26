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
import { ThreeDots } from 'react-loader-spinner'

const ForecastWeather = ({
	weather,
	formatToLocalTime,
	measure,
	isLoading,
}) => (
	<ForecastWeatherWrapper>
		{weather && (
			<>
				{!isLoading ? (
					<>
						<ForecastFuture weather={weather} measure={measure} />
						<ForecastDay
							weather={weather}
							formatToLocalTime={formatToLocalTime}
							measure={measure}
						/>
					</>
				) : (
					<ThreeDots
						wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
						color="#fff"
					/>
				)}
			</>
		)}
	</ForecastWeatherWrapper>
)

ForecastWeather.propTypes = {}

ForecastWeather.defaultProps = {}

export default ForecastWeather
