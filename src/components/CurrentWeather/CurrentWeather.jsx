import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { ThreeDots } from 'react-loader-spinner'
import { getWeatherIcon } from '../../services/getWeatherIcon'
import {
	CurrentWeatherWrapper,
	CurrentWeatherContent,
	LocationWrapper,
	Text,
	SolarCycle,
	WeatherWrapper,
	Temp,
	Weather,
	ToggleTempMeasure,
	ToggleTempMeasureContainer,
	IconWrapper,
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
}) => {
	const [checked, setChecked] = useState(
		localStorage.getItem('measure') === 'F' ? true : false
	)

	const convertTime12to24 = (time12h) => {
		return moment(time12h, ['h:mm A']).format('HH:mm')
	}

	return (
		<CurrentWeatherWrapper>
			<Searchbar onSearch={onSearch} />
			{Object.keys(current).length > 0 && (
				<CurrentWeatherContent>
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
								{/* <img src={current.condition.icon} alt="" /> */}
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
									{checked === false
										? `${current.temp_c}°C`
										: `${current.temp_f}°F`}
								</Temp>
								<Weather>{current.condition.text}</Weather>
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
				</CurrentWeatherContent>
			)}

			<ToggleTempMeasureContainer>
				<input
					type="checkbox"
					checked={checked}
					onChange={() => {
						localStorage.setItem('measure', checked === true ? 'C' : 'F')
						setChecked(!checked)
					}}
				/>
				<ToggleTempMeasure>{checked === false ? 'C' : 'F'}</ToggleTempMeasure>
				<p>C</p>
				<p>F</p>
			</ToggleTempMeasureContainer>
		</CurrentWeatherWrapper>
	)
}

CurrentWeather.propTypes = {
	current: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
}

CurrentWeather.defaultProps = {}

export default CurrentWeather
