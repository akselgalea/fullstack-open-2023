const Person = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(({ id, name, number }) => 
        <Person key={id} name={name} number={number} />
      )}
    </div>
  )
}

export default Persons