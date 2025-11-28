import { useState } from "react"

function Button ({text, setter, value}) {
  return (
    <button onClick={() => setter(value + 1)}>{text}</button>
  )
}

function StatisticLine ({text, value}){
  return (
    <table>
      <tr>
        <td>{text}: </td>
        <td>{value}</td>
      </tr>
    </table>
  )
}

function Statistics ({good, bad, neutral}) {
  return (
    <>
    <h2>Statistics:</h2>
    {(!good && !bad && !neutral) ? (<h3>No feedback given yet!</h3>) : (
    <>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Total" value={good + bad + neutral}/>
      <StatisticLine text="Average" value={(good || bad || neutral) ? (bad*-1 + good)/(good + bad + neutral) : 0}/>
      <StatisticLine text="Percentage of positive feedback" value={`${good ? good*100/(good+bad+neutral) : 0}%`}/>
    </>
    )}
    </>
  )
}



function App() {
 const [good, setGood] = useState(0);
 const [bad, setBad] = useState(0);
 const [neutral, setNeutral] = useState(0);


  return (
    <>
    <h1>Unicafe feedback collection</h1>
    <h2>Give feedback!</h2>
    <Button text="Good!" value={good} setter={setGood}></Button>
    <Button text="Neutral -_-" setter={setNeutral} value={neutral}/>
    <Button text= "Bad :/" value={bad} setter={setBad} />
    <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </>
  )
}

export default App
