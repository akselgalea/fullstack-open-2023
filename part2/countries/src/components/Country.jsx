import weatherService from '../services/weather'
import Weather from './Weather'
import { useEffect, useState } from 'react'

const Country = ({ country }) => {
  const { languages } = country
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService.getWeatherByCapital(`${country.capital}`).then(res => {
      setWeather(res)
    }).catch(error => {
      console.log(error)
      setWeather()
    })
  }, [])

  return (
    <div>
      <header>
        <h2>{country.name.common}</h2>
      </header>

      <div>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
      </div>

      <div>
        <header>
          <h3>languages:</h3>
        </header>

        <ul>
          {
            Object.keys(languages).map((key) => {
              return <li key={key}>{languages[key]}</li>
            }) 
          }
        </ul>
      </div>

      <div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>

      { weather && (
        <Weather 
          place={country.capital}
          temperature={weather.temperature}
          wind={weather.wind}
          icon={weather.icon}
        />
      ) }
    </div>
  )
}

export default Country