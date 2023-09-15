import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

// Saving newPersons
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService.getAll().then(persons => {
      setPersons(persons)
    }).catch(error => {
      console.error(error)
      sendNotification('error', 'Failed to fetch data')
    })
  }, [])

  const filteredPersons = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    const person = persons.find(person => person.name === newName)

    if(person) {
      updateIfExists(person)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService.create(newPerson).then(newPerson => {
      setPersons(persons.concat(newPerson))
      sendNotification('success', `Added ${newPerson.name}`)
    }).catch(error => {
      sendNotification('error', error.response.data.error)
    })

    resetInput()
  }

  const updateIfExists = (person) => {
    if(!confirm(`${newName} is already in the phonebook, replace old number with a new one?`)) return

    const newPerson = {...person, number: newNumber}

    personService.update(person.id, newPerson).then(res => {
      setPersons(persons.map(person => person.id !== newPerson.id ? person : newPerson))
      sendNotification('success', `Updated ${newPerson.name}`)
    }).catch(error => {
      console.error(error)
      sendNotification('error', error.response.data.error)
    })
  }

  const deletePerson = (id, name) => {
    if (!confirm(`Delete ${name}?`)) return
    
    personService.destroy(id).then(res => {
      setPersons(persons.filter(person => person.id != id))
      sendNotification('success', `Deleted ${name}`)
    }).catch(error => {
      console.error(error)
      
      if (error.response.status === 404) {
        sendNotification('error', `Information of ${name} has already been removed from server`)
      } else sendNotification('error', `Failed to delete ${name}`)
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

  const sendNotification = (status, message) => {
    setNotification({ message, status })

    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <>
      <div>
        <header>
          <h2>Phonebook</h2>

          <Notification notification={notification} />
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