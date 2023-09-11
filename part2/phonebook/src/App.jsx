import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

// Saving newPersons
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll().then(res => {
      setPersons(res.data)
    })
  }, [])

  const filteredPersons = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter))

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    personService.create(newPerson).then(newPerson => {
      setPersons(persons.concat(newPerson))
    }).catch(error => {
      console.log(error)
    })

    resetInput()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const resetInput = () => {
    setNewName('')
    setNewNumber('')
  }

  return (
    <>
      <div>
        <header>
          <h2>Phonebook</h2>
        </header>

        <div>
          filter shown with <Filter value={filter} handleChange={handleFilterChange} />
        </div>

        <PersonForm
          name={newName}
          handleNameChange={handleNameChange}
          number={newNumber}
          handleNumberChange={handleNumberChange}
          handleSubmit={addPerson}
        />        
      </div>
      <div>
        <header>
          <h2>Numbers</h2>
        </header>

        <Persons persons={filteredPersons} />
      </div>
    </>
  )
}

export default App