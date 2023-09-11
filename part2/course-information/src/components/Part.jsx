const Part = ({ part }) => {
  const { id, name, exercises } = part
  return (
    <p>{name} {exercises}</p>
  )
}

export default Part