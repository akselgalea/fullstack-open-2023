const Country = ({ country }) => {
  const { languages } = country
  console.log(languages)
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
    </div>
  )
}

export default Country