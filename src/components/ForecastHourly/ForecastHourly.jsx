import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Title from '../Title'
import {
	ForecastHourlyWrapper,
	ForecastHourlyContent,
	ForecastHourlyList,
	ForecastHourlyItem,
	Pagination,
	PaginationItem,
	Temp,
	Text,
	Time,
	IconWrapper,
} from './ForecastHourly.styled'
import { getWeatherIcon } from '../../services/getWeatherIcon'

const ForecastHourly = ({
	forecast,
	selectedDay,
	formatToLocalTime,
	measure,
}) => {
	const getInitialFirstItem = () =>
		forecast[0].hour.findIndex(
			(hour) => moment(hour.time).hour() > moment().hour()
		)

	const getHour = (time) => {
		if (moment(time).hour() === moment().hour() && selectedDay === 0)
			return 'Now'
		return formatToLocalTime(time)
	}

	return (
		<ForecastHourlyWrapper>
			<ForecastHourlyContent>
				<Title size="30">Hourly</Title>
				<ForecastHourlyList
					initialFirstItem={getInitialFirstItem()}
					itemsToShow={5}
					itemPadding={[0, 8]}
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
					{forecast[selectedDay].hour.map(
						({ time, condition: { text }, is_day, temp_c, temp_f }) => (
							<ForecastHourlyItem key={time}>
								<Time>{getHour(time)}</Time>
								<IconWrapper _width="54" minHeight="54">
									{getWeatherIcon(text, is_day, 90)}
								</IconWrapper>
								<div>
									<Temp>
										{measure === 'C'
											? ` ${Math.round(temp_c)}°C`
											: ` ${Math.round(temp_f)}°F`}
									</Temp>
									<Text>{text}</Text>
								</div>
							</ForecastHourlyItem>
						)
					)}
				</ForecastHourlyList>
			</ForecastHourlyContent>
		</ForecastHourlyWrapper>
	)
}

ForecastHourly.propTypes = {}

export default ForecastHourly
