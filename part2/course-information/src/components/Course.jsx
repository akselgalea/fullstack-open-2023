const Header = ({ text }) => {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  )
}

const Content = ({ parts }) => {
  const total = parts.reduce((sum, current) => sum + current.exercises, 0)

  return (
    <>
      {parts.map((part) => 
        <Part key={part.id} part={part} />
      )}

      <Total total={total} />
    </>
  )
}

const Part = ({ part }) => {
  const { id, name, exercises } = part
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({ total }) => {
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Course = ({ course }) => {
  const { name, parts } = course

  return (
    <div>
      <Header text={name} />
      <Content parts={parts} />
    </div>
  )
}

export default Course