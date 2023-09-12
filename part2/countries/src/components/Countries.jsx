import Country from "./Country"

const Countries = ({ countries }) => {
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
        <p key={`${country.idd.root}-${country.idd.suffixes}`}>{country.name.common}</p>
      ))}
    </div>
  )
}

export default Countries