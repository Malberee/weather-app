import React from 'react'
import PropTypes from 'prop-types'
// import IconWrapper from '../IconWrapper'
import Title from '../Title'
import {
	ForecastDayWrapper,
	ForecastDayContent,
	ForecastDayList,
	ForecastDayItem,
	Pagination,
	PaginationItem,
	Temp,
	Text,
	Time,
	IconWrapper,
} from './ForecastDay.styled'
import { getWeatherIcon } from '../../services/getWeatherIcon'

const ForecastDay = ({
	weather: { hourly },
	formatToLocalTime,
	measure,
	timezone,
}) => {
	const getInitialFirstItem = () => {
		const index = hourly
			.slice(1, 25)
			.findIndex(
				(hour) => new Date(hour.dt).getHours() > new Date(Date.now()).getHours()
			)
		if (index < 1) return 0
		return index
	}

	return (
		<ForecastDayWrapper>
			<ForecastDayContent>
				<Title size="30">Today</Title>
				<ForecastDayList
					itemsToShow={5}
					itemPadding={[0, 8]}
					initialFirstItem={getInitialFirstItem()}
					showArrows={false}
					renderPagination={({ pages, activePage, onClick }) => {
						return (
							<Pagination>
								{pages.map((page) => {
									const isActivePage = activePage === page
									return (
										<PaginationItem
											maxWidth="20%"
											key={page}
											onClick={() => onClick(page)}
											active={isActivePage}
										/>
									)
								})}
							</Pagination>
						)
					}}
				>
					{hourly.slice(1, 25).map(({ dt, temp, weather }) => (
						<ForecastDayItem key={dt}>
							<Time>{formatToLocalTime(dt, timezone)}</Time>
							<IconWrapper _width="54" minHeight="54">
								{getWeatherIcon(weather[0].icon, 90)}
							</IconWrapper>
							<div>
								<Temp>
									{measure === 'C'
										? ` ${Math.round(temp)}°C`
										: ` ${Math.round((temp * 9) / 5 + 32)}°F`}
								</Temp>
								<Text>{weather[0].main}</Text>
							</div>
						</ForecastDayItem>
					))}
				</ForecastDayList>
			</ForecastDayContent>
		</ForecastDayWrapper>
	)
}

ForecastDay.propTypes = {}

export default ForecastDay
