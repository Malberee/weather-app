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

const ForecastDay = ({ forecast, getLocalTime, measure }) => {
	const getInitialFirstItem = () => {
		return forecast[0].hour.findIndex(
			(hour) => new Date(hour.time).getHours() > new Date(Date.now()).getHours()
		)
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
					{forecast[0].hour.map(
						({ time, is_day, temp_c, temp_f, condition }) => (
							<ForecastDayItem key={time}>
								<Time>{getLocalTime(time)}</Time>
								<IconWrapper _width="54" minHeight="54">
									{getWeatherIcon(condition.text, is_day, 90)}
								</IconWrapper>
								<div>
									<Temp>
										{measure === 'C'
											? `${Math.trunc(temp_c)}°C`
											: `${Math.trunc(temp_f)}°F`}
									</Temp>
									<Text>{condition.text}</Text>
								</div>
							</ForecastDayItem>
						)
					)}
				</ForecastDayList>
			</ForecastDayContent>
		</ForecastDayWrapper>
	)
}

ForecastDay.propTypes = {}

export default ForecastDay
