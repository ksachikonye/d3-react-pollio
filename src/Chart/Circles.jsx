import React from 'react'
import PropTypes from 'prop-types'
import { accessorPropsType } from './utils'

const Circles = ({ data, keyAccessor, xAccessor, yAccessor, radius }) => (
  <>
  </>
)

Circles.propTypes = {
  data: PropTypes.array,
  keyAccessor: accessorPropsType,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  radius: accessorPropsType
}

Circles.defaultProps = {
  radius: 5
}

export default Circles
