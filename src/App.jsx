import { useState } from 'react'
import Image  from "../src/assets/img/btn_boy.png"  
import './App.css'
import { ButtonGenero } from './assets/components/ButtonGenero'
import { Form } from './assets/components/Form'



function App() {
  const [count, setCount] = useState(0)
  const [gender, setgender] = useState('')
  return (
      gender=="" ?(           
      <section className='container_button'>
        <ButtonGenero img="../src/assets/img/btn_boy.png" setgender={setgender} gender={gender} >Masculino</ButtonGenero>
        <ButtonGenero img="../src/assets/img/btn_women.png" setgender={setgender} gender={gender} >Femenino</ButtonGenero>   
      </section>)

:

<Form gender={gender} setgender={setgender}></Form>


  





)}


export default App
