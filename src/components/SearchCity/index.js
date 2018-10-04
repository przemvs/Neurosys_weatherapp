import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Field, getFormValues, reduxForm} from 'redux-form'
import SelectDropdown from '../SelectDropdown'
import {connect} from 'react-redux'
import AddCity from './AddCity'
import Form from './Form'
import Notification from './Notification'

const SearchCity = ({cities, handleSubmit, values, addedCities}) => {
  const getSelectedCity =
    addedCities && addedCities.filter(city => city.city === (values && values.city.value))
  const addedCity = getSelectedCity[0] && getSelectedCity[0].city === values.city.value

  const disabledButton = values === undefined || addedCity

  return (
    <Fragment>
      <Form>
        <Field
          name="city"
          component={SelectDropdown}
          clearable={false}
          searchable={true}
          placeholder="Add city..."
          dataset={cities}
        />

        <AddCity disabled={disabledButton} handleSubmit={handleSubmit} />
      </Form>
      {addedCity && (
        <Notification>This city is on the list. Please choose other city.</Notification>
      )}
    </Fragment>
  )
}

SearchCity.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  cities: PropTypes.array,
  logValue: PropTypes.object,
  addedCities: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
}

export default reduxForm({
  form: 'addCity'
})(
  connect(state => ({
    values: getFormValues('addCity')(state)
  }))(SearchCity)
)
