import { useState } from "react";


const perros = [
    {
        Nombre: "Rex",
        Edad: 5,
        Sexo: "macho",
        Raza: "Boxer",
        Tamaño: 50
    },
    {
        Nombre: "Chease",
        Edad: 3,
        Sexo: "macho",
        Raza: "Pastor aleman",
        Tamaño: 70
    },    
    {
        Nombre: "Sky",
        Edad: 2,
        Sexo: "macho",
        Raza: "Cocker",
        Tamaño: 30
    }
]

const Mesa5 = () => {

    const [arrPerros, setArrPerros] = useState(perros)
        const newArrPerros = arrPerros.filter(i => i != item);
        setArrPerros(newArrPerros);
        

    return(
        <div>
            <h1>Veterinaria</h1>
            <ul>
                {
                    arrPerros.map((item, index) => (
                        <li key={item.Nombre}>
                            <h2>Nombre: {item.Nombre}</h2>
                            <p>Edad: {item.Edad}</p>
                            <p>Sexo: {item.Sexo}</p>
                            <p>Raza: {item.Raza}</p>
                            <p>Tamaño: {item.Tamaño}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Mesa5;