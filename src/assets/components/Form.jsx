import React, { useEffect, useState } from 'react'
import '../../assets/Form.css'
import { Carta } from './Carta'
export const Form = ({gender,setgender}) => {

const [result, setresult] = useState(0)
const [succesful, setsuccesful] = useState(false)
let calculo=0
const [IMC, setIMC] = useState({
    weight:'',
    height:'',
    IMC:result,
    gender:gender
})



// Actualizar Datos
const actualizarIMC = (evento)=>{
    evento.preventDefault();
    setIMC({
        ...IMC,
        [evento.target.name]:[evento.target.value]
    });
    console.log(IMC)
}

const calcularIMC = (evento) => {
    evento.preventDefault();
    let { weight, height } = IMC;
    calculo = (parseFloat(weight) / (parseInt(height) / 100) ** 2).toFixed(2);
  
    console.log(calculo);
  
    // Actualiza el estado 'result' con el valor calculado de IMC
    setresult(calculo);
  
    setsuccesful(true);
  
    console.log(result);
    console.log(IMC);
  };
  






  return (

!succesful?

<section className="login-box">
    <h2>Formulario IMC</h2>
  <form >
    <div className="user-box">
      <input type="number" name="weight" required="" onChange={actualizarIMC}/>
      <label>Peso</label>
    </div>
    <div className="user-box">
      <input type="number" name="height" required="" onChange={actualizarIMC}/>
      <label>Estatura</label>
    </div><center>
    <button className="btn-Form" href="#" onClick={calcularIMC}>
           Calcular
       <span></span>
    </button  ></center>
  </form>
</section>
:<Carta IMC={IMC} setgender={setgender} gender={gender} ></Carta>
  )
}
