import { useState, useEffect } from "react"
import axios from 'axios'
import Countries from "./components/Countries"
import Country from "./components/Country"

const COUNTRIES_API_URL = 'https://studies.cs.helsinki.fi/restcountries/'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
 
  useEffect(() => {
    axios.get(`${COUNTRIES_API_URL}/api/all`).then(res => {
      setCountries(res.data)
    }, err => {
      console.error(err)
    })
  }, [])

  const filteredCountries = !filter ? countries : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }
  
  const selectCountry = (country) => {
    setSelectedCountry(country)
  }
  
  if(!countries) return <p>Loading countries...</p>
  
  return (
    <>
      find countries <input name="filter" value={filter} onChange={handleFilterChange} />
      <Countries countries={selectedCountry ? [selectedCountry] : filteredCountries} handleClick={selectCountry} />  
    </>
  )
}

export default App
