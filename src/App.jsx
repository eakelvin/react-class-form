import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassForm from './Components/ClassForm'
import FunctionForm from './Components/FunctionForm'

function App() {

  return (
    <div className="App">
      <ClassForm />
      <hr />
      <FunctionForm />
    </div>
  )
}

export default App
