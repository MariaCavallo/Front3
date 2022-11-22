import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    aspect-ratio: 4 / 3;
    width: 70%;
    height: 100%;
    align-items: center;
    background-color:  #154360;
    justify-content: space-between;
    border: 2px solid #6deb33;
    border-radius: 15px;
    padding: 10px;
`

export const IndexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid #428917;
    border-radius: 5px;
    background-color: #428917;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const Image = styled.img`
    width: 50%;
    height: auto;
`


export const Button = styled.button`
    border: 2px solid ${({main}) => main ? '#C72121' : '#1E2EB1'};
    border-radius: 15px;
    font-size: 1.5rem;
    padding: 5px 10px;
    background-color: ${({main}) => main ? '#C72121' : '#1E2EB1'};
    color: white;
    &:active {
        animation: 0.5s click ease;
    }
    @keyframes click {
        0% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`