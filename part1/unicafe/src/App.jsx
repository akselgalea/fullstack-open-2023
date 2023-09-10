import { useState } from 'react'

const Statistics = (props) => {
  /*
    I added this because i already separated the statistics component in the previus exercise
  */
  const { good, neutral, bad } = props
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = good / all * 100 || 0

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
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