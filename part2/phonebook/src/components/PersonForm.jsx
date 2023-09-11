const PersonForm = ({ handleSubmit, name, handleNameChange, number, handleNumberChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h2>add a new</h2>
      </header>

      <div>
        name: <input name="name" value={name} onChange={handleNameChange} />
      </div>
      <div>number: <input name="number" value={number} onChange={handleNumberChange} /></div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm