import { useState, useEffect } from "react"
import axios from 'axios'
import Countries from "./components/Countries"

const COUNTRIES_API_URL = 'https://studies.cs.helsinki.fi/restcountries/'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
 
  useEffect(() => {
    axios.get(`${COUNTRIES_API_URL}/api/all`).then(res => {
      setCountries(res.data)
    }, err => {
      console.error(err)
    })
  }, [])

  const filteredCountries = !filter ? countries : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => setFilter(event.target.value)
  
  if(!countries) return <p>Loading...</p>

  return (
    <>
      find countries <input name="filter" value={filter} onChange={handleFilterChange} />
      <Countries countries={filteredCountries} />  
    </>
  )
}

export default App
