import React, { Component } from 'react'
import ComponentePlantilla from './ComponentePlantilla';

class ComponenteClase extends Component {

    constructor(props){
        super(props);
    }

  render() {
    const { mesa } = this.props;
    return (
        <div>
            <h1>Componente Clase {mesa.clase}</h1>
            <ComponentePlantilla message={" Soy hijo de Clase"}/>
        </div>
    )
  }
}

export default ComponenteClase;