import {
  FETCH_CITIES_START,
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_SUCCESS,
  FETCH_ADDED_CITIES_START,
  FETCH_ADDED_CITIES_FAILURE,
  FETCH_ADDED_CITIES_SUCCESS,
  FETCH_WEATHER_SUCCESS,
  ADD_CITY_SUCCESS
} from 'constants/types'

const initialState = {
  cities: {
    isLoading: false,
    isEmpty: true,
    data: {}
  },
  userCities: {
    isLoading: false,
    isEmpty: true,
    data: {}
  }
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_START:
      return {
        ...state,
        cities: {
          isLoading: true
        }
      }

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        cities: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    case FETCH_ADDED_CITIES_START:
      return {
        ...state,
        userCities: {
          isLoading: true
        }
      }

    case FETCH_ADDED_CITIES_SUCCESS:
      return {
        ...state,
        userCities: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_ADDED_CITIES_FAILURE:
      return {
        ...state,
        userCities: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    case FETCH_WEATHER_SUCCESS:
      const weatherListPartial = state.userCities.data.filter(city => {
        return city.id !== action.payload.id
      })

      const weatherPartial = action.payload

      const newWeatherList = [...weatherListPartial, weatherPartial].sort((a, b) => {
        if (a.id < b.id) {
          return -1
        }
        if (a.id > b.id) {
          return 1
        }
        if (a.id === b.id) {
          return 0
        }
      })

      return {
        ...state,
        userCities: {
          ...state.userCities,
          data: newWeatherList
        }
      }

    case ADD_CITY_SUCCESS:
      const userCities = state.userCities.data.filter(city => {
        return city.city !== action.payload.city
      })

      const newCity = action.payload
      const data = [...userCities, newCity]

      return {
        ...state,
        userCities: {
          ...state.userCities,
          data
        }
      }

    default:
      return state
  }
}

export default weatherReducer
