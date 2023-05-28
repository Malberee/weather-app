import {useState} from 'react'
import PropTypes from 'prop-types'
import ForecastDaily from '../ForecastDaily'
import ForecastHourly from '../ForecastHourly'
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
}) => {
	const [selectedDay, setSelectedDay] = useState(0)

	return (
	<ForecastWeatherWrapper>
		{weather && (
			<>
				{!isLoading ? (
					<>
						<ForecastDaily
							forecast={weather.forecast}
							selectedDay={selectedDay}
							setSelectedDay={setSelectedDay}
							measure={measure}
						/>
						<ForecastHourly
							forecast={weather.forecast}
							selectedDay={selectedDay}
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
)}

ForecastWeather.propTypes = {}

ForecastWeather.defaultProps = {}

export default ForecastWeather
