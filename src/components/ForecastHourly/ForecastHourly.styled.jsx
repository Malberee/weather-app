import styled from 'styled-components'
import Carousel from 'react-carousel-elasticss'

export const ForecastHourlyWrapper = styled.div`
	/* padding-top: 35px; */
	overflow: hidden;
`

export const ForecastHourlyContent = styled.div`
	margin: 0 -8px;
	text-align: center;
`

export const ForecastHourlyList = styled(Carousel)`
	margin-top: 35px;

	.rec-slider-container {
		margin: 0 auto;
	}
`

export const ForecastHourlyItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	max-width: 132px;
	min-width: 132px;
	height: 170px;
	padding: 18px;
	border-radius: 14px;

	background-color: #1b1b1b;
	color: white;
`

export const Pagination = styled.ul`
	display: flex;
	gap: 7px;
`

export const PaginationItem = styled.li`
	width: 7px;
	height: 7px;
	margin-top: 5px;
	border-radius: 50%;
	background: linear-gradient(
		180deg,
		#ffffff 0%,
		rgba(255, 255, 255, 0.5) 100%
	);
	opacity: ${(props) => (props.active ? '100%' : '40%')};

	cursor: pointer;
`

export const Text = styled.p`
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
`

export const Temp = styled.h2`
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
`

export const Time = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
`

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: ${(props) => props._width}px;
	min-width: ${(props) => props._width}px;
`
