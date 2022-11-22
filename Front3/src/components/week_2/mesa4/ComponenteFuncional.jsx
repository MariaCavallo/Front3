import React from 'react'
import ComponentePlantilla from './ComponentePlantilla'

const ComponenteFuncional = (props) => {
    const { mesa } = props;
  return (
    <div>
        <h1>ComponenteFuncional {mesa.funcional}</h1>
        <ComponentePlantilla message = "Soy hijo de Funcional"/>
    </div>
  )
}

export default ComponenteFuncional