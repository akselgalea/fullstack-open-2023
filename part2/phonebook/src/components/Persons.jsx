const Person = ({ person, handleDelete }) => {
  const { id, name, number } = person

  return (
    <div>
      {name} {number} <button onClick={() => handleDelete(id, name)}>delete</button>
    </div>
  )
}

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => 
        <Person key={person.id} person={person} handleDelete={handleDelete} />
      )}
    </div>
  )
}

export default Persons