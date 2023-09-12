const Weather = ({ place, temperature, wind, icon }) => {
  return (
    <section>
      <header>
        <h2>Weather in {place}</h2>
      </header>
      
      <p>temperature {temperature} Celcius</p>
      <img src={icon} />
      <p>wind {wind} km/h</p>
    </section>
  )
}

export default Weather