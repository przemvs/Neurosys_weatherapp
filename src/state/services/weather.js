import api from './api'

class WeatherService {
  fetchCities = async () => api.get(`api/city-list`)

  addCity = async ({city}, weather) => {
    const data = {
      label: city.label,
      city: city.value,
      cloudPercentage: weather.cloudPercentage,
      rainAmount: weather.rainAmount,
      temperature: weather.temperature
    }

    return api.post(`http://localhost:3001/weatherCities`, data)
  }

  getAddedCities = async () => api.get(`http://localhost:3001/weatherCities`)

  updateWeather = async data => api.patch(`http://localhost:3001/weatherCities/${data.id}`, data)

  fetchWeather = async id => api.get(`api/weather/${id}`)

  deleteCity = async id => api.delete(`http://localhost:3001/weatherCities/${id}`)
}

export default new WeatherService()
