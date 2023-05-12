import React from 'react'
import PropTypes from 'prop-types'
import { ForecastWeatherWrapper, HourForecastList, HourForecastItem } from './ForecastWeather.styled'

const ForecastWeather = ({forecast, getLocalTime}) => (
    <ForecastWeatherWrapper>
        <HourForecastList>
            {forecast.hour.map(({time_epoch, temp_c}) => {
                return (
                    <HourForecastItem key={time_epoch}>
                        <p>{getLocalTime(time_epoch)}</p>
                        <p>{temp_c}℃</p>
                    </HourForecastItem>
                )
            })}
        </HourForecastList>
    </ForecastWeatherWrapper>
)

ForecastWeather.propTypes = {}

ForecastWeather.defaultProps = {}

export default ForecastWeather
