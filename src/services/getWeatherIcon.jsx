import * as Icon from '../components/Icons'

export const getWeatherIcon = (weather, isDay, width) => {
	if (isDay) {
		switch (weather) {
			case 'Clear':
				return <Icon.SunnyClear width={width} />
				break
			case 'Sunny':
				return <Icon.SunnyClear width={width} />
				break
			case 'Partly cloudy':
				return <Icon.SunnyCloudyless width={width} />
				break
			case 'Overcast':
				return <Icon.Cloudy width={width} />
				break
			case 'Mist':
				return <Icon.Fog width={width} />
				break
			case 'Patchy rain possible':
				return <Icon.Rain width={width} />
				break
			case 'Patchy snow possible':
				return <Icon.Snow width={width} />
				break
			case 'Patchy sleet possible':
				return <Icon.SnowRain width={width} />
				break
			case 'Patchy freezing drizzle possible':
				return <Icon.Snow width={width} />
				break
			case 'Thundery outbreaks possible':
				return <Icon.Thunder width={width} />
				break
			case 'Blowing snow':
				return <Icon.Snow width={width} />
				break
			case 'Blizzard':
				return <Icon.Snow width={width} />
				break
			case 'Fog':
				return <Icon.Fog width={width} />
				break
			case 'Freezing fog':
				return <Icon.Fog width={width} />
				break
			case 'Patchy light rain':
				return <Icon.Rain width={width} />
				break
			case 'Light rain':
				return <Icon.Rain width={width} />
				break
			case 'Moderate rain at times':
				return <Icon.Rain width={width} />
				break
			case 'Moderate rain':
				return <Icon.Rain width={width} />
				break
			case 'Heavy rain at times':
				return <Icon.Rain width={width} />
				break
			case 'Heavy rain':
				return <Icon.Rain width={width} />
				break
			case 'Light freezing rain':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy freezing rain':
				return <Icon.SnowRain width={width} />
				break
			case 'Light sleet':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy sleet':
				return <Icon.SnowRain width={width} />
				break
			case 'Patchy light snow':
				return <Icon.Snow width={width} />
				break
			case 'Light snow':
				return <Icon.Snow width={width} />
				break
			case 'Patchy moderate snow':
				return <Icon.Snow width={width} />
				break
			case 'Moderate snow':
				return <Icon.Snow width={width} />
				break
			case 'Patchy heavy snow':
				return <Icon.Snow width={width} />
				break
			case 'Heavy snow':
				return <Icon.Snow width={width} />
				break
			case 'Ice pellets':
				return <Icon.Snow width={width} />
				break
			case 'Light rain shower':
				return <Icon.Rain width={width} />
				break
			case 'Moderate or heavy rain shower':
				return <Icon.Rain width={width} />
				break
			case 'Torrential rain shower':
				return <Icon.Rain width={width} />
				break
			case 'Light sleet showers':
				return <Icon.Snow width={width} />
				break
			case 'Moderate or heavy sleet showers':
				return <Icon.Snow width={width} />
				break
			case 'Light snow showers':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy snow showers':
				return <Icon.Snow width={width} />
				break
			case 'Light showers of ice pellets':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy showers of ice pellets ':
				return <Icon.SnowRain width={width} />
				break
			case 'Patchy light rain with thunder ':
				return <Icon.HeavyrainStorm width={width} />
				break
			case 'Moderate or heavy rain with thunder ':
				return <Icon.HeavyrainStorm width={width} />
				break
			case 'Patchy light snow with thunder ':
				return <Icon.SnowStorm width={width} />
				break
			case 'Moderate or heavy snow with thunder':
				return <Icon.SnowStorm width={width} />
				break
			default:
				return <Icon.SunnyClear width={width} />
				break
		}
	}
	if (!isDay) {
		switch (weather) {
			case 'Clear':
				return <Icon.NightClear width={width} />
				break
			case 'Sunny':
				return <Icon.NightClear width={width} />
				break
			case 'Partly cloudy':
				return <Icon.NightCloudyless width={width} />
				break
			case 'Overcast':
				return <Icon.Cloudy width={width} />
				break
			case 'Mist':
				return <Icon.Fog width={width} />
				break
			case 'Patchy rain possible':
				return <Icon.NightRain width={width} />
				break
			case 'Patchy snow possible':
				return <Icon.NightSnow width={width} />
				break
			case 'Patchy sleet possible':
				return <Icon.SnowRain width={width} />
				break
			case 'Patchy freezing drizzle possible':
				return <Icon.NightSnow width={width} />
				break
			case 'Thundery outbreaks possible':
				return <Icon.Thunder width={width} />
				break
			case 'Blowing snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Blizzard':
				return <Icon.NightSnow width={width} />
				break
			case 'Fog':
				return <Icon.Fog width={width} />
				break
			case 'Freezing fog':
				return <Icon.Fog width={width} />
				break
			case 'Patchy light rain':
				return <Icon.NightRain width={width} />
				break
			case 'Light rain':
				return <Icon.NightRain width={width} />
				break
			case 'Moderate rain at times':
				return <Icon.NightRain width={width} />
				break
			case 'Moderate rain':
				return <Icon.NightRain width={width} />
				break
			case 'Heavy rain at times':
				return <Icon.NightRain width={width} />
				break
			case 'Heavy rain':
				return <Icon.NightRain width={width} />
				break
			case 'Light freezing rain':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy freezing rain':
				return <Icon.SnowRain width={width} />
				break
			case 'Light sleet':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy sleet':
				return <Icon.SnowRain width={width} />
				break
			case 'Patchy light snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Light snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Patchy moderate snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Moderate snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Patchy heavy snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Heavy snow':
				return <Icon.NightSnow width={width} />
				break
			case 'Ice pellets':
				return <Icon.NightSnow width={width} />
				break
			case 'Light rain shower':
				return <Icon.NightRain width={width} />
				break
			case 'Moderate or heavy rain shower':
				return <Icon.NightRain width={width} />
				break
			case 'Torrential rain shower':
				return <Icon.NightRain width={width} />
				break
			case 'Light sleet showers':
				return <Icon.NightSnow width={width} />
				break
			case 'Moderate or heavy sleet showers':
				return <Icon.NightSnow width={width} />
				break
			case 'Light snow showers':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy snow showers':
				return <Icon.NightSnow width={width} />
				break
			case 'Light showers of ice pellets':
				return <Icon.SnowRain width={width} />
				break
			case 'Moderate or heavy showers of ice pellets ':
				return <Icon.SnowRain width={width} />
				break
			case 'Patchy light rain with thunder ':
				return <Icon.HeavyrainStorm width={width} />
				break
			case 'Moderate or heavy rain with thunder ':
				return <Icon.HeavyrainStorm width={width} />
				break
			case 'Patchy light snow with thunder ':
				return <Icon.SnowStorm width={width} />
				break
			case 'Moderate or heavy snow with thunder':
				return <Icon.SnowStorm width={width} />
				break
			default:
				return <Icon.NightClear width={width} />
				break
		}
	}
}
