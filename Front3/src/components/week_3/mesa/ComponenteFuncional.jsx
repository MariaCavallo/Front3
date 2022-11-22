import React from "react";
import { useState } from 'react'
import style from "./style/style.module.css"

const ComponenteFuncional = () => {
    const [contador, setContador] = useState(0)
    
    const numValido = num => num > 0 && num < 51 ? true : false;

    const handleContador = (operacion) => {
        switch (operacion) {
            case "+":
                const sum = contador + 1;
                numValido(sum) && setContador(sum);
                break;
            case "-":
                const rest = contador - 1;
                numValido(rest) && setContador(rest);
                break;
            case "*":
                const mult = contador * 2;
                numValido(mult) && setContador(mult);
                break;
            case "/":
                const divi = contador / 2;
                numValido(divi) && setContador(divi);
                break;     
            default:
                break;
        }
    }

    return (
    <div className={style['counterContainer']}>
        <button onClick={() => handleContador("+")}>Sumar</button>
        <button onClick={() => handleContador("-")}>Restar</button>
        <button onClick={() => handleContador("*")}>Multiplicar</button>
        <button onClick={() => handleContador("/")}>Dividir</button>
        <h1>{contador}</h1>
    </div>
    )
}
export default ComponenteFuncional