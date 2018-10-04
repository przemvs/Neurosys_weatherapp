import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const SelectDropdown = ({
  dataset,
  name,
  disabled,
  placeholder,
  multi,
  clearable,
  input,
  logValue,
  searchable
}) => {
  const handleChange = selectedOption => {
    if (selectedOption && selectedOption.value !== undefined) {
      input.onChange(selectedOption)
    } else {
      input.onChange(selectedOption)
    }
  }

  return (
    <Select
      searchable={searchable}
      disabled={disabled}
      clearable={clearable}
      placeholder={placeholder}
      name={name}
      multi={multi}
      onChange={handleChange}
      options={dataset}
    />
  )
}

SelectDropdown.propTypes = {
  name: PropTypes.string,
  dataset: PropTypes.array,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  input: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  logValue: PropTypes.bool
}

export default SelectDropdown
