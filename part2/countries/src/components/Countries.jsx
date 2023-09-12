import Country from "./Country"

const Countries = ({ countries, handleClick }) => {
  if(!countries || countries.length === 0) return (
    <p>No matching countries found</p>
  )

  if(countries.length > 10) return (
    <p>Too many matches, specify another filter</p>
  )

  if(countries.length === 1) return (
    <Country country={countries[0]} />
  )

  return (
    <div>
      {countries.map(country => (
        <div className="country" key={`${country.idd.root}-${country.idd.suffixes}`}>
          <p>{country.name.common}</p>

          <button onClick={() => handleClick(country)}>show</button>
        </div>
      ))}
    </div>
  )
}

export default Countries