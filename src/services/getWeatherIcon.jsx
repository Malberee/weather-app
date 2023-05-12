import * as Icon from '../components/Icons'

export const getWeatherIcon = (weather, isDay) => {
	if (isDay) {
		switch (weather) {
			case 'Clear':
				return <Icon.SunnyClear />
				break
			case 'Sunny':
				return <Icon.SunnyClear />
				break
			case 'Partly cloudy':
				return <Icon.SunnyCloudyless />
				break
			case 'Overcast':
				return <Icon.Cloudy />
				break
			case 'Mist':
				return <Icon.Fog />
				break
			case 'Patchy rain possible':
				return <Icon.Rain />
				break
			case 'Patchy snow possible':
				return <Icon.Snow />
				break
			case 'Patchy sleet possible':
				return <Icon.SnowRain />
				break
			case 'Patchy freezing drizzle possible':
				return <Icon.Snow />
				break
			case 'Thundery outbreaks possible':
				return <Icon.Thunder />
				break
			case 'Blowing snow':
				return <Icon.Snow />
				break
			case 'Blizzard':
				return <Icon.Snow />
				break
			case 'Fog':
				return <Icon.Fog />
				break
			case 'Freezing fog':
				return <Icon.Fog />
				break
			case 'Patchy light rain':
				return <Icon.Rain />
				break
			case 'Light rain':
				return <Icon.Rain />
				break
			case 'Moderate rain at times':
				return <Icon.Rain />
				break
			case 'Moderate rain':
				return <Icon.Rain />
				break
			case 'Heavy rain at times':
				return <Icon.Rain />
				break
			case 'Heavy rain':
				return <Icon.Rain />
				break
			case 'Light freezing rain':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy freezing rain':
				return <Icon.SnowRain />
				break
			case 'Light sleet':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy sleet':
				return <Icon.SnowRain />
				break
			case 'Patchy light snow':
				return <Icon.Snow />
				break
			case 'Light snow':
				return <Icon.Snow />
				break
			case 'Patchy moderate snow':
				return <Icon.Snow />
				break
			case 'Moderate snow':
				return <Icon.Snow />
				break
			case 'Patchy heavy snow':
				return <Icon.Snow />
				break
			case 'Heavy snow':
				return <Icon.Snow />
				break
			case 'Ice pellets':
				return <Icon.Snow />
				break
			case 'Light rain shower':
				return <Icon.Rain />
				break
			case 'Moderate or heavy rain shower':
				return <Icon.Rain />
				break
			case 'Torrential rain shower':
				return <Icon.Rain />
				break
			case 'Light sleet showers':
				return <Icon.Snow />
				break
			case 'Moderate or heavy sleet showers':
				return <Icon.Snow />
				break
			case 'Light snow showers':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy snow showers':
				return <Icon.Snow />
				break
			case 'Light showers of ice pellets':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy showers of ice pellets ':
				return <Icon.SnowRain />
				break
			case 'Patchy light rain with thunder ':
				return <Icon.HeavyrainStorm />
				break
			case 'Moderate or heavy rain with thunder ':
				return <Icon.HeavyrainStorm />
				break
			case 'Patchy light snow with thunder ':
				return <Icon.SnowStorm />
				break
			case 'Moderate or heavy snow with thunder':
				return <Icon.SnowStorm />
				break
			default:
				return <Icon.SunnyClear />
				break
		}
	}
	if (!isDay) {
		switch (weather) {
			case 'Clear':
				return <Icon.NightClear />
				break
			case 'Sunny':
				return <Icon.NightClear />
				break
			case 'Partly cloudy':
				return <Icon.NightCloudyless />
				break
			case 'Overcast':
				return <Icon.Cloudy />
				break
			case 'Mist':
				return <Icon.Fog />
				break
			case 'Patchy rain possible':
				return <Icon.NightRain />
				break
			case 'Patchy snow possible':
				return <Icon.NightSnow />
				break
			case 'Patchy sleet possible':
				return <Icon.SnowRain />
				break
			case 'Patchy freezing drizzle possible':
				return <Icon.NightSnow />
				break
			case 'Thundery outbreaks possible':
				return <Icon.Thunder />
				break
			case 'Blowing snow':
				return <Icon.NightSnow />
				break
			case 'Blizzard':
				return <Icon.NightSnow />
				break
			case 'Fog':
				return <Icon.Fog />
				break
			case 'Freezing fog':
				return <Icon.Fog />
				break
			case 'Patchy light rain':
				return <Icon.NightRain />
				break
			case 'Light rain':
				return <Icon.NightRain />
				break
			case 'Moderate rain at times':
				return <Icon.NightRain />
				break
			case 'Moderate rain':
				return <Icon.NightRain />
				break
			case 'Heavy rain at times':
				return <Icon.NightRain />
				break
			case 'Heavy rain':
				return <Icon.NightRain />
				break
			case 'Light freezing rain':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy freezing rain':
				return <Icon.SnowRain />
				break
			case 'Light sleet':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy sleet':
				return <Icon.SnowRain />
				break
			case 'Patchy light snow':
				return <Icon.NightSnow />
				break
			case 'Light snow':
				return <Icon.NightSnow />
				break
			case 'Patchy moderate snow':
				return <Icon.NightSnow />
				break
			case 'Moderate snow':
				return <Icon.NightSnow />
				break
			case 'Patchy heavy snow':
				return <Icon.NightSnow />
				break
			case 'Heavy snow':
				return <Icon.NightSnow />
				break
			case 'Ice pellets':
				return <Icon.NightSnow />
				break
			case 'Light rain shower':
				return <Icon.NightRain />
				break
			case 'Moderate or heavy rain shower':
				return <Icon.NightRain />
				break
			case 'Torrential rain shower':
				return <Icon.NightRain />
				break
			case 'Light sleet showers':
				return <Icon.NightSnow />
				break
			case 'Moderate or heavy sleet showers':
				return <Icon.NightSnow />
				break
			case 'Light snow showers':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy snow showers':
				return <Icon.NightSnow />
				break
			case 'Light showers of ice pellets':
				return <Icon.SnowRain />
				break
			case 'Moderate or heavy showers of ice pellets ':
				return <Icon.SnowRain />
				break
			case 'Patchy light rain with thunder ':
				return <Icon.HeavyrainStorm />
				break
			case 'Moderate or heavy rain with thunder ':
				return <Icon.HeavyrainStorm />
				break
			case 'Patchy light snow with thunder ':
				return <Icon.SnowStorm />
				break
			case 'Moderate or heavy snow with thunder':
				return <Icon.SnowStorm />
				break
			default:
				return <Icon.NightClear />
				break
		}
	}
}
