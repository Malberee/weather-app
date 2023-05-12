import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
	CurrentWeatherWrapper,
	CurrentWeatherContent,
	Location,
	Text,
	SolarCycle,
	WeatherWrapper,
	Temp,
	Weather,
	ToggleTempMeasure,
	ToggleTempMeasureContainer,
	IconWrapper,
	Humidity
} from './CurrentWeather.styled'
import Searchbar from '../Searchbar'
import * as Icon from '../Icons'

const CurrentWeather = ({ current, location, forecast, getLocalTime, onFormSubmit }) => {
	const [checked, setChecked] = useState(localStorage.getItem('measure') === 'F' ? true : false)

	const getWeatherIcon = (weather, isDay) => {
		if (isDay) {
			switch (weather) {
				case 'Clear':
					return (
						<>
							<SunnyClear />
							<p>{weather}</p>
						</>
					)
					break

				default:
					break
			}
		}
		if (!isDay) {
			switch (weather) {
				case 'Clear':
					return (
						<>
							<NightClear />
							<p>{weather}</p>
						</>
					)
					break
				case 'Sunny':
					return (
						<>
							<NightCloudyless />
							<p>{weather}</p>
						</>
					)
					break
				default:
					break
			}
		}
		return <SunnyClear />
	}

	return (
		<CurrentWeatherWrapper>
			<Searchbar onFormSubmit={onFormSubmit}/>
			{Object.keys(current).length > 0 && (
			<>
				<CurrentWeatherContent>
					<Location>
						<Text>
							<IconWrapper>
								<Icon.Location width="27" />
							</IconWrapper>
							{location.name}
						</Text>
						<Text>Local time: { getLocalTime(location.localtime_epoch)}</Text>
					</Location>
					<Icon.CloudyRainny />
					<SolarCycle>
						<Text>
							<IconWrapper>
								<Icon.Sunrise width="27" />
							</IconWrapper>
							{` ${forecast.astro.sunrise}`}
						</Text>
						<Text>
							<IconWrapper>
								<Icon.Sunset width="27" />
							</IconWrapper>
							{` ${forecast.astro.sunset}`}
						</Text>
					</SolarCycle>
					<WeatherWrapper>
						<Humidity>
							<IconWrapper>
								<Icon.Droplet width="27" />
							</IconWrapper>
							{current.humidity}%
						</Humidity>
						<Temp>{checked === false ? `${current.temp_c}°C` : `${current.temp_f}°F`}</Temp>
						<Weather>{ current.condition.text}</Weather>
					</WeatherWrapper>
				</CurrentWeatherContent>
			</>)}

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
