import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const AddCity = ({handleSubmit, disabled}) => (
  <Button disabled={disabled} onClick={handleSubmit}>
    +
  </Button>
)

AddCity.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool
}

export default AddCity
