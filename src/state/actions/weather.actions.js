import {
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  FETCH_ADDED_CITIES_FAILURE,
  FETCH_ADDED_CITIES_START,
  FETCH_ADDED_CITIES_SUCCESS,
  ADD_CITY_FAILURE,
  ADD_CITY_START,
  ADD_CITY_SUCCESS,
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  REMOVE_CITY
} from 'constants/types'
import weatherService from '../services/weather'
import {startSubmit, stopSubmit} from 'redux-form'

export const getCities = () => async dispatch => {
  dispatch({type: FETCH_CITIES_START})
  try {
    const res = await weatherService.fetchCities()
    dispatch({type: FETCH_CITIES_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type: FETCH_CITIES_FAILURE})
  }
}

export const addCity = city => async dispatch => {
  dispatch(startSubmit('addCity'))
  dispatch({type: ADD_CITY_START})
  try {
    const getWeather = await weatherService.fetchWeather(city.city.value)
    const res = await weatherService.addCity(city, getWeather.data)

    const cityWeather = {...res.data, ...getWeather.data}

    dispatch(stopSubmit('addCity'))
    dispatch({type: ADD_CITY_SUCCESS, payload: cityWeather})
  } catch (error) {
    dispatch({type: ADD_CITY_FAILURE})
  }
}

export const deleteCity = id => async dispatch => {
  try {
    const res = await weatherService.deleteCity(id)
    dispatch({type: REMOVE_CITY, payload: res})
    dispatch(getAddedCities())
  } catch (error) {
    console.log(error)
  }
}

export const getAddedCities = () => async dispatch => {
  dispatch({type: FETCH_ADDED_CITIES_START})
  try {
    const res = await weatherService.getAddedCities()

    const weather = await Promise.all(
      res.data.map(async item => {
        const getWeather = await weatherService.fetchWeather(item.city)
        return {...item, ...getWeather.data}
      })
    )

    dispatch({type: FETCH_ADDED_CITIES_SUCCESS, payload: weather})
  } catch (error) {
    dispatch({type: FETCH_ADDED_CITIES_FAILURE})
  }
}

export const updateWeather = city => async dispatch => {
  dispatch({type: FETCH_WEATHER_START})

  const res = await weatherService.fetchWeather(city.city)
  const newCityData = await weatherService.updateWeather({...city, ...res.data})

  dispatch({type: FETCH_WEATHER_SUCCESS, payload: newCityData.data})
}
