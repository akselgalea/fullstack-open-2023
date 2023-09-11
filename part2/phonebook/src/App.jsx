import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
            <p key={person.name}>{person.name}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App