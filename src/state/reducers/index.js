import {combineReducers} from 'redux'
import weatherReducer from './weather.reducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
  weather: weatherReducer,
  form: formReducer
})
