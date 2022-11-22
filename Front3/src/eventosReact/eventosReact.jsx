import React from 'react';

const Pokemons = () => {
    const pokemonsInfo = [
        {
            id: 1,
            nommbre: 'Pickachu',
        },
        {
            id: 2,
            nommbre: 'Bulbasur',
        },
    ];

    const eliminarPokemon = (id, e) => {
        e.preventDefault();

        console.log(id);
        // .... logica para remover el pokemon
    };

    return (
    <>
        {pokemonsInfo.map(pokemon => (
            <div key={pokemon.id}>
                <p>{pokemon.nommbre}</p>
                <button onClick={e => eliminarPokemon(pokemon.id, e)}>Eliminar Pokemon</button>
            </div>
            ))}
    </>
        )
}

export default Pokemons;