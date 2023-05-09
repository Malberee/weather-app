import React from 'react'
import PropTypes from 'prop-types'
import { ForecastWeatherWrapper } from './ForecastWeather.styled'

const ForecastWeather = ({forecast}) => (
    <ForecastWeatherWrapper>
        <ul></ul>
    </ForecastWeatherWrapper>
)

ForecastWeather.propTypes = {}

ForecastWeather.defaultProps = {}

export default ForecastWeather
