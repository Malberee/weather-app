import React from 'react'
import PropTypes from 'prop-types'
import { H2 } from './Title.styled'

const Title = ({ children, size }) => <H2 size={size}>{children}</H2>

Title.propTypes = {}

Title.defaultProps = {}

export default Title
