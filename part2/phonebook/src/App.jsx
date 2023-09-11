import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

    setPersons(persons.concat(newPerson))
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

        <input value={filter} onChange={handleFilterChange} />

        <form onSubmit={addPerson}>
          <header>
            <h2>add a new</h2>
          </header>

          <div>
            name: <input name="name" value={newName} onChange={handleNameChange} />
          </div>
          <div>number: <input name="number" value={newNumber} onChange={handleNumberChange} /></div>

          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <header>
          <h2>Numbers</h2>
        </header>

        <div>
          {filteredPersons.map(person => 
            <p key={person.id}>{person.name} {person.number}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App