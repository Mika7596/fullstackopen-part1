import { useState } from "react"

function App() {
 const [good, setGood] = useState(0);
 const [bad, setBad] = useState(0);
 const [neutral, setNeutral] = useState(0);


  return (
    <>
    <h1>Unicafe feedback collection</h1>
    <h2>Give feedback!</h2>
    <button onClick={() => setGood(good + 1)}>Good!</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral -_-</button>
    <button onClick={() => setBad(bad + 1)}>Bad :/</button>
    <h2>Statistics:</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {good + bad + neutral}</p>
    <p>Average: {(good || bad || neutral) ? (bad*-1 + good)/(good + bad + neutral) : 0}</p>
    <p>Percentage of positive feedback: {good ? good*100/(good+bad+neutral) : 0}%</p>
    </>
  )
}

export default App
