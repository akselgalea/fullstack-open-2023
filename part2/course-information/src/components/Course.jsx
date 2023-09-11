import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => {
  const { name, parts } = course

  return (
    <>
      <Header text={name} />
      <Content parts={parts} />
    </>
  )
}

export default Course