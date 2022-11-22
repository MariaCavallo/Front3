//import info from '../package.json' //ANCHOR - ESTO, ¿TE FUNCIONÓ DESDE UN PRINCIPIO?
import info from "./data.json";
import React from 'react'
import Post from './Post' //NOTE - LA IMPORTACIÓN DEL COMPONENTE NO PUEDE SER EL MISMO NOMBRE DEL COMPONENTE PADRE.
import '../index.css' //NOTE => NO TIENES QUE IMPORTAR INDEX EN CADA ARCHIVO.

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Posteos es el padre de:
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

//const Post = ({ ClickCounter }) => { //NOTE - DEJO DECLARACIÓN ORIGINAL COMENTADA.
const Posteos = ({ ClickCounter }) => {
  return (
    <div className='container'>
      {info.map(info => <Post Key={info.id} ClickCounter={ClickCounter} info={info} />)}
    </div>
  )
}
export default Posteos;

{/*NOTE => 
  LOS DATOS QUE ESTEMOS RECIBIENDO, SIEMPRE DEBEN EMPEZAR SU FLUJO 
  DENTRO DE UN ESTADO.
  NO ES UNA BUENA PRÁCTICA QUE DATA ESTÉ SIENDO MAPPED ASÍ COMO SE RECIBE.
*/}