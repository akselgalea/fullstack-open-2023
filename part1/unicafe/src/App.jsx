import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>give feedback</h1>
        </header> 

        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </div>

      <div>
        <header>
          <h1>statistics</h1>
        </header>

        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}

export default App