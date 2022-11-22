import styled from "styled-components";


export const Container = styled.div `
    width: 100%;
    background-color: #072B39  ;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgb(115 103 240 / 40%);
    font-size: .9em;
    letter-spacing: 1px;
`

export const Title = styled.h1 `
    color: #92B6FF;
    font-size: 50px;
`

export const ImagePokemon = styled.img `
    width: 40%;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const Buttons = styled.button `
    border: 2px solid ${({main}) => main ? '#2D97BF' : '#2DBFA2'};
    border-radius: 15px;
    font-size: 1.5rem;
    padding: 5px 10px;
    background-color: ${({main}) => main ? '#2DBFA2' : '#2D97BF'};
    color: white;
`