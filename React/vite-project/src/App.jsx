import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hello } from './square.jsx'
import { Button } from './button.jsx'
import { Button2 } from './button2.jsx'
import { Lista } from './lista.jsx'
import { Contador } from './contador.jsx'

import { Lista2 } from './lista2.jsx'
import { Form } from './form.jsx'
import { Jokes } from './jokes.jsx'

var nombres = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

function App() {


  return (
    <>
    <Hello></Hello>
    <Button></Button>
    <div className='ejer3'>
      <Button2 content="Boton1"></Button2>
      <Button2 content="Boton2"></Button2>
      <Button2 content="Boton3"></Button2>
    </div>
    <br></br>
    <div>
      <Contador></Contador>
    </div>
    <div>
      <Lista></Lista>
    </div>

    <br></br>
    
    <div>
      <Lista2 listaNombres={nombres}></Lista2>
    </div>

    <br></br>

    <Form></Form>

    <br></br>

    <Jokes></Jokes>

    </>
  )
}

export default App
