import * as Icon from '../components/Icons'

export const getWeatherIcon = (weather, width) => {
	switch (weather) {
		case '01d':
			return <Icon.SunnyClear width={width} />
			break
		case '01n':
			return <Icon.NightClear width={width} />
			break
		case '02d':
			return <Icon.SunnyCloudyless width={width} />
			break
		case '02n':
			return <Icon.NightCloudyless width={width} />
			break
		case '03d':
			return <Icon.Cloudy width={width} />
			break
		case '03n':
			return <Icon.NightCloudy width={width} />
			break
		case '04d':
			return <Icon.Cloudy width={width} />
			break
		case '04n':
			return <Icon.NightCloudy width={width} />
			break
		case '09d':
			return <Icon.Rain width={width} />
			break
		case '09n':
			return <Icon.NightRain width={width} />
			break
		case '10d':
			return <Icon.Rain width={width} />
			break
		case '10n':
			return <Icon.NightRain width={width} />
			break
		case '11d':
			return <Icon.Thunder width={width} />
			break
		case '11n':
			return <Icon.Thunder width={width} />
			break
		case '13d':
			return <Icon.Snow width={width} />
			break
		case '13n':
			return <Icon.NightSnow width={width} />
			break
		case '50d':
			return <Icon.Fog width={width} />
			break
		case '50n':
			return <Icon.Fog width={width} />
			break
	}
}
