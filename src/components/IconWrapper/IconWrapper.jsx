import React from 'react'
import PropTypes from 'prop-types'
import { IconWrap } from './IconWrapper.styled'

const IconWrapper = ({children}) => (
    <IconWrap>
        {children}
    </IconWrap>
)

IconWrapper.propTypes = {}

IconWrapper.defaultProps = {}

export default IconWrapper
