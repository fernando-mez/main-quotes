import React, { useState } from 'react'
import './App.css'
import './cards.css'
import QuoteBox from './QuoteBox'
import quotes from './assets/json/quotes.json'

function App() {
  let max = quotes.length


  const [randomColor, setrandomColor] = useState(0)
  const [randomColorC, setrandomColorC] = useState(16777215)
  const [numRandom, setNumRandom] = useState(0)

  const getRandom = () => {
    setNumRandom(Math.floor(Math.random() * max))
    setrandomColor(Math.floor(Math.random() * 16777215))
    setrandomColorC((16777215 - Number(randomColor)))
  }






  return (

    <div className="App">
      {/* <QuoteBox /> */}
      <QuoteBox btnClick={getRandom} rColor={randomColor} rColorC={randomColorC} nRandom={numRandom} />
    </div>

  )
}

export default App
