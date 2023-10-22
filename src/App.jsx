import { useState } from 'react'
import './App.css'
import Input from './Input.jsx'
import TipPercentages from './TipPercentages.jsx'

function App() {

  return (
    <div id='container'>
      <div id='dados'>
        <Input title='Bill' input_id='bill' />
        <TipPercentages />
        <Input title='Number of people' input_id='people' />
      </div>
      <div id='resultados'></div>
    </div>
  )
}

export default App
