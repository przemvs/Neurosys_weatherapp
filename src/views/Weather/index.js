import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  getCities,
  addCity,
  getAddedCities,
  updateWeather,
  deleteCity
} from 'actions/weather.actions'
import {SearchCity} from 'components'

import Wrapper from './Wrapper'
import City from 'components/City'
import Content from './Content'

class Weather extends Component {
  componentDidMount() {
    this.props.getCities()
    this.props.getAddedCities()
  }

  generateObject = obj => {
    const cities = []
    const isNotEmpty = item => obj[item] !== false && obj[item] !== null

    Object.keys(
      obj.reduce((prev, item) => {
        return isNotEmpty(item) && cities.push({value: item.id, label: item.name})
      }, {})
    )

    return cities
  }

  renderCities = cities =>
    cities.map(city => (
      <City
        key={city.id}
        city={city}
        deleteCity={this.props.deleteCity}
        refreshWeather={this.props.updateWeather}
      />
    ))

  render() {
    const {cities, userCities, addCity} = this.props
    const citiesLoading = !userCities.isLoading && !userCities.isEmpty

    return (
      <Wrapper>
        <SearchCity
          cities={citiesLoading ? this.generateObject(cities.data) : []}
          addedCities={citiesLoading && userCities.data}
          onSubmit={addCity}
        />
        <Content>{citiesLoading && this.renderCities(userCities.data)}</Content>
      </Wrapper>
    )
  }
}

function mapStateToProps({weather}) {
  return {
    cities: {
      data: weather.cities.data,
      isLoading: weather.cities.isLoading,
      isEmpty: weather.cities.isEmpty
    },
    userCities: {
      data: weather.userCities.data,
      isLoading: weather.userCities.isLoading,
      isEmpty: weather.userCities.isEmpty
    }
  }
}

Weather.propTypes = {
  getCities: PropTypes.func,
  updateWeather: PropTypes.func,
  addCity: PropTypes.func,
  getAddedCities: PropTypes.func,
  deleteCity: PropTypes.func,
  cities: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  userCities: PropTypes.object
}

export default connect(
  mapStateToProps,
  {getCities, addCity, getAddedCities, updateWeather, deleteCity}
)(withRouter(Weather))
