import React from 'react'

export const ButtonGenero = ({img,children,setgender,gender}) => {
  const handleClic =()=>{

    setgender(children)
    
  }
  return (

    

    <button className='btn-charather' onClick={handleClic}>
        <img src={img} alt="" />
    <div>
        <span>{children}</span>
    </div>
    </button>
  )
}
