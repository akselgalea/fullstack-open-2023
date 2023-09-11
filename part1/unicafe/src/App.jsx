import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
} 

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = good / all * 100 || 0

  if(all === 0) return <p>No feedback given</p>

  return (
    <>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
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

  const saveReview = {
    'good': () => setGood(good + 1),
    'neutral': () => setNeutral(neutral + 1),
    'bad': () => setBad(bad + 1)
  }
  
  // I wanted to try and call a function call as the handleClick event and also test the fuctions as object properties
  const handleReview = (review) => saveReview[review]

  return (
    <>
      <div>
        <header>
          <h1>give feedback</h1>
        </header> 

        <Button handleClick={handleReview('good')} text='good' />
        <Button handleClick={handleReview('neutral')} text='neutral' />
        <Button handleClick={handleReview('bad')} text='bad' />
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