import PropTypes from 'prop-types'
import { ThreeDots } from 'react-loader-spinner'
import CurrentWeather from '../CurrentWeather'
import {
	SidebarWrapper,
	ToggleTempMeasure,
	ToggleTempMeasureContainer,
} from './Sidebar.styled'
import Searchbar from '../Searchbar'

const Sidebar = ({
	weather,
	formatToLocalTime,
	onSearch,
	isLoading,
	getUserCity,
	measure,
	toggleMeasure,
}) => {
	// const [checked, setChecked] = useState(
	// 	localStorage.getItem('measure') === 'F' ? true : false
	// )

	return (
		<SidebarWrapper>
			<Searchbar onSearch={onSearch} getUserCity={getUserCity} />

			{weather && (
				<div>
					{!isLoading ? (
						<CurrentWeather
							weather={weather}
							formatToLocalTime={formatToLocalTime}
							measure={measure}
						/>
					) : (
						<ThreeDots
							wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
							color="#fff"
						/>
					)}
				</div>
			)}

			<ToggleTempMeasureContainer>
				<input
					type="checkbox"
					defaultChecked={measure === 'C' ? false : true}
					onChange={() =>
						toggleMeasure((prevState) => (prevState === 'C' ? 'F' : 'C'))
					}
				/>
				<ToggleTempMeasure>{measure}</ToggleTempMeasure>
				<p>C</p>
				<p>F</p>
			</ToggleTempMeasureContainer>
		</SidebarWrapper>
	)
}

Sidebar.propTypes = {
	// weather: PropTypes.object.isRequired,
}

Sidebar.defaultProps = {}

export default Sidebar
