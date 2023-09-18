import React, { useEffect, useState } from 'react'
import '../../assets/Carta.css'
import Spinner from './Spinner';


export const Carta = ({IMC,setgender,gender}) => {
    const {weight,height} =IMC
    const calculo = (parseFloat(weight) / (parseInt(height) / 100) ** 2).toFixed(2);
    const [resultIMC, setresultIMC] = useState(calculo)
    const [Estado, setEstado] = useState('')
    const [img, setimg] = useState(null)



    const reset = ()=>{
        setgender("")
    }

    useEffect(() => {
        if(gender=="Masculino"){
            if (resultIMC<18.5) {
                setEstado("Bajo peso")
                // setimg('../public/img/M-flaco.png')
                setimg('./img/M-flaco.png')

            }else if(resultIMC>= 18.5 && resultIMC<24.9){
                // setimg('../public/img/M-fornido.png')
                setimg('./img/M-fornido.png')

                
                setEstado('Peso Normal')
            }else if(resultIMC>=24.9 && resultIMC <29.9){
                // setimg('../public/img/M-obeso.png')
                setimg('./img/M-obeso.png')
                
                setEstado('Sobrepeso')
            }else{
                // setimg('../public/img/M-obeso.png')
                setimg('./img/M-obeso.png')
                
                setEstado('Obesidad')
            }

        }else if(gender=="Femenino"){
            if (resultIMC<18.5) {
                setEstado("Bajo peso")
                // setimg('../public/img/F-flaca.png')
                setimg('./img/F-flaca.png')

            }else if(resultIMC>= 18.5 && resultIMC<24.99){
                // setimg('../public/img/F-fornido.png')
                setimg('./img/F-fornido.png')

                setEstado('Peso Normal')
            }else if(resultIMC>=25 && resultIMC <29.99){
                setEstado('Sobrepeso')
                // setimg('../public/img/F-obeso.png')
                setimg('./img/F-obeso.png')

            }else{
                setimg('./img/F-obeso.png')

                setEstado('Obesidad')
            }

        }

    }, [])
    


  return (
    img?(    <div className="card">
    <div className="top-section">
      
      <div className="icons">
        <div className="logo">
         <button onClick={reset}>Regresar</button>
        </div>
      
      </div>
      <Spinner></Spinner>
      <img src={img} className='img-characther' alt="" />
    </div>
    <div className="bottom-section">
      <span className="title">Hola! tienes {Estado}</span>
      <div className="row row1">
        <div className="item">
          <span className="big-text">Peso</span>
          <span className="regular-text">{IMC.weight} kg</span>
        </div>
        <div className="item">
          <span className="big-text">IMC </span>
          <span className="regular-text">{resultIMC} kg/cm</span>
        </div>
        <div className="item">
          <span className="big-text">Altura</span>
          <span className="regular-text">{IMC.height} cm</span>
        </div>
      </div>
    </div>
  </div>):<Spinner></Spinner>
  )
}
