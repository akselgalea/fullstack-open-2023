import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    const newPerson = {
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

        <form onSubmit={addPerson}>
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
          {persons.map(person => 
            <p key={person.name}>{person.name} {person.number}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App