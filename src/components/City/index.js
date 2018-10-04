import React from 'react'
import PropTypes from 'prop-types'

import {Svg} from 'components'
import {iconClouds, iconRain, iconSun, iconDelete, iconRefresh} from 'images'

import StyledCity from './StyledCity'
import Heading from './Heading'
import WeatherType from './WeatherType'
import {Options, Option} from './Options'
import Temperature from './Temperature'

const generateIcon = weather => {
  switch (weather) {
    case 'rainy':
      return <Svg style={{width: 32}} icon={iconRain} />
    case 'sunny':
      return <Svg style={{width: 32}} icon={iconSun} />
    case 'cloudy':
      return <Svg style={{width: 32}} icon={iconClouds} />
    default:
      return null
  }
}

const City = ({city, deleteCity, refreshWeather}) => {
  return (
    <StyledCity>
      <Heading>
        <WeatherType>
          {city.rainAmount >= 0.1 && city.cloudPercentage >= 1 && generateIcon('rainy')}
          {city.rainAmount === 0 && city.cloudPercentage === 0 && generateIcon('sunny')}
          {city.cloudPercentage >= 1 && city.rainAmount === 0 && generateIcon('cloudy')}
        </WeatherType>
        <Options>
          <Option>
            <Svg style={{width: 24}} onClick={() => deleteCity(city.id)} icon={iconDelete} />
          </Option>
          <Option>
            <Svg style={{width: 24}} onClick={() => refreshWeather(city)} icon={iconRefresh} />
          </Option>
        </Options>
      </Heading>
      <Temperature>
        Temp{' '}
        <span>
          {Math.floor(city.temperature)}
          °C
        </span>
      </Temperature>
      <b>{city.label}</b>
    </StyledCity>
  )
}

City.propTypes = {
  city: PropTypes.object,
  deleteCity: PropTypes.func,
  refreshWeather: PropTypes.func
}

export default City
