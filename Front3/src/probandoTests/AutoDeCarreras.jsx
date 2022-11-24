import React from 'react'

const AutoDeCarreras = ({ estado }) => {

    const obtenerMensajeEstado = () => {
        if (estado === "largada") {
            return "El auto sale a toda marcha"
        } else if (estado === "espera") {
            return "El auto está listo para largar"
        } else {
            return "Por favor, revisar el estado de la carrera"
        }
    };

    return <p>{obtenerMensajeEstado()}</p>
};

export default AutoDeCarreras;