import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { ThreeDots } from 'react-loader-spinner'
import { getWeatherIcon } from '../../services/getWeatherIcon'
import Title from '../Title'
import IconWrapper from '../IconWrapper'
import {
	CurrentWeatherWrapper,
	LocationWrapper,
	SolarCycle,
	WeatherWrapper,
	Temp,
	Text,
	ToggleTempMeasure,
	ToggleTempMeasureContainer,
	CurrentWeatherIconWrapper,
} from './CurrentWeather.styled'
import Searchbar from '../Searchbar'
import { Location, Sunset, Sunrise, Droplet } from '../Icons'

const CurrentWeather = ({
	current,
	location,
	forecast,
	getLocalTime,
	onSearch,
	isLoading,
	getUserCity,
	measure,
	toggleMeasure,
}) => {
	// const [checked, setChecked] = useState(
	// 	localStorage.getItem('measure') === 'F' ? true : false
	// )

	const convertTime12to24 = (time12h) => {
		return moment(time12h, ['h:mm A']).format('HH:mm')
	}

	return (
		<CurrentWeatherWrapper>
			<Searchbar onSearch={onSearch} getUserCity={getUserCity} />
			{current && (
				<div>
					{!isLoading ? (
						<>
							<LocationWrapper>
								<p>
									<IconWrapper>
										<Location width="27" />
									</IconWrapper>
									{location.country}, {location.name}
								</p>
								<p>Local time: {getLocalTime(location.localtime)}</p>
							</LocationWrapper>
							<CurrentWeatherIconWrapper>
								<div>
									{getWeatherIcon(current.condition.text, current.is_day)}
								</div>
							</CurrentWeatherIconWrapper>
							<SolarCycle>
								<Text>
									<IconWrapper>
										<Sunrise width="27" />
									</IconWrapper>
									{convertTime12to24(forecast.astro.sunrise)}
								</Text>
								<Text>
									<IconWrapper>
										<Sunset width="27" />
									</IconWrapper>
									{convertTime12to24(forecast.astro.sunset)}
								</Text>
							</SolarCycle>
							<WeatherWrapper>
								<Temp>
									{measure === 'C'
										? `${Math.trunc(current.temp_c)}°C`
										: `${Math.trunc(current.temp_f)}°F`}
								</Temp>
								<Title size="30">{current.condition.text}</Title>
								<Text>
									<IconWrapper>
										<Droplet width="27" />
									</IconWrapper>
									{current.humidity}%
								</Text>
							</WeatherWrapper>
						</>
					) : (
						<ThreeDots
							wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
							color="#fff"
						/>
					)}
				</div>
			)}

			<ToggleTempMeasureContainer>
				<input
					type="checkbox"
					checked={measure === 'C' ? false : true}
					onChange={toggleMeasure}
				/>
				<ToggleTempMeasure>{measure}</ToggleTempMeasure>
				<p>C</p>
				<p>F</p>
			</ToggleTempMeasureContainer>
		</CurrentWeatherWrapper>
	)
}

CurrentWeather.propTypes = {
	// current: PropTypes.object.isRequired,
	// location: PropTypes.object.isRequired,
}

CurrentWeather.defaultProps = {}

export default CurrentWeather
