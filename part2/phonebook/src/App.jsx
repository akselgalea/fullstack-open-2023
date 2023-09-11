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
    personService.getAll().then(persons => {
      setPersons(persons)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  const filteredPersons = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter))

  const addPerson = (event) => {
    event.preventDefault()

    const person = persons.find(person => person.name === newName)

    if(person) {
      updateIfExists(person)
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

  const updateIfExists = (person) => {
    if(!confirm(`${newName} is already in the phonebook, replace old number with a new one?`)) return

    const newPerson = {...person, number: newNumber}

    personService.update(person.id, newPerson).then(res => {
      setPersons(persons.map(person => person.id !== newPerson.id ? person : newPerson))
    })
  }

  const deletePerson = (id, name) => {
    if (!confirm(`Delete ${name}?`)) return
    
    personService.destroy(id).then(res => {
      setPersons(persons.filter(person => person.id != id))
    }).catch(error => {
      console.error(error)
    })
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

        <Persons persons={filteredPersons} handleDelete={deletePerson} />
      </div>
    </>
  )
}

export default App