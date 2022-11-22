import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, ButtonContainer, CardContainer, Image } from './styles';

const ComponentFunction = () => {

    const [ index, setIndex ] = useState(1);
    const [character, setCharacter] = useState(null);


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err));
    }, [index])

    return (
        <CardContainer>
                <h1>POKEMONES</h1>
                <p>INDEX: {index}</p>
                <h2>El nombre es: {character?.species.name}</h2>
                <Image src={character?.sprites.front_default} alt=""/>
                <ButtonContainer>
                    <Button onClick={() => setIndex(index - 1)}>ANTERIOR</Button>
                    <Button onClick={() => setIndex(index + 1)} main={true}>PROXIMO</Button>
                </ButtonContainer>
        </CardContainer>
    )
}

export default ComponentFunction;