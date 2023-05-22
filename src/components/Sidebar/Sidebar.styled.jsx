import styled from 'styled-components'

export const SidebarWrapper = styled.div`
	width: 436px;
	height: 762px;
	background: rgba(40, 40, 40, 0.5);
	border: 1px solid #545454;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(7.5px);
	border-radius: 30px 0px 0px 30px;
	color: white;
	padding: 16px;
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const SolarCycle = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 64px;

	margin-bottom: 12px;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
`

export const WeatherWrapper = styled.div`
	text-align: center;
	font-weight: 600;
`

export const Temp = styled.h2`
	display: inline-block;

	font-weight: 700;
	font-size: 50px;
	line-height: 61px;
`

export const ToggleTempMeasureContainer = styled.label`
	position: relative;

	display: flex;
	justify-content: space-around;
	align-items: center;

	width: 56px;
	height: 32px;
	border-radius: 28px;
	padding: 4px;

	font-weight: 700;
	font-size: 14px;
	line-height: 17px;

	cursor: pointer;

	color: white;
	background-color: #282828;

	& input {
		position: absolute;
		visibility: hidden;
	}

	& input:checked + span {
		transform: translate(100%, -50%);
	}
`

export const ToggleTempMeasure = styled.span`
	position: absolute;
	top: 50%;
	left: 4px;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: linear-gradient(180deg, #ffffff 0%, #929292);
	color: #282828;

	transform: translateY(-50%);
	transition: transform 150ms cubic-bezier(0.42, 0, 0.48, 0.98);
`



