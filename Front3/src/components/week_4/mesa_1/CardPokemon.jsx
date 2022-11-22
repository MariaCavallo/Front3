import React, { Component } from "react";
import { Pokemon } from "../../week_2/pokemons";
import { Container, Title, ImagePokemon, Buttons, ButtonContainer } from "./stylesCardPoke";

class CardPokemon extends Component {
    keys = Object.keys(Pokemon);

    state = {
        indexInObject: 0,
        indexInArray: 0,
    };

    handleRequest = (typeOfOperation) => {
        if (typeOfOperation === "NEXT") {
            if (
                this.keys[this.keys.length - 1] ===
                this.keys[this.state.indexInObject] &&
                this.state.indexInArray ===
                Pokemon[this.keys[this.state.indexInObject]].length - 1
            ) {
                this.setState({
                    indexInObject: 0,
                    indexInArray: 0,
                });
            } else if (
                this.state.indexInArray <
                Pokemon[this.keys[this.state.indexInObject]].length - 1
            ) {
                this.setState({
                    indexInArray: this.state.indexInArray + 1,
                    indexInObject: this.state.indexInObject,
                });
            } else {
                this.setState({
                    indexInObject: this.state.indexInObject + 1,
                    indexInArray: 0,
                });
            }
        }

        if (typeOfOperation === "PREV") {
            if (this.state.indexInArray > 0) {
                this.setState({
                    indexInArray: this.state.indexInArray - 1,
                    indexInObject: this.state.indexInObject,
                });
            }
            if (this.state.indexInArray === 0) {
                this.setState({
                    indexInArray: Pokemon[this.keys[this.state.indexInObject]].length - 1,
                    indexInObject:
                        this.state.indexInObject === 0
                            ? this.keys.length - 1
                            : this.state.indexInObject - 1,
                });
            }
        }
    };

    //1ER MÉTODO DE CICLO DE VIDA - AL MONTARSE EL COMPONENTE
    componentDidMount() {
        //LLAMADOS INICIALES A API'S.
        this.setState({
            indexInObject: 0,
            indexInArray: 0,
        });
    }

    //2DO MÉTODO DE CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTE
    componentDidUpdate(prevProps, prevState) {}

    render() {
        return (
            <Container>
                <ImagePokemon src={Pokemon[this.keys[this.state.indexInObject]][this.state.indexInArray].avatar} alt="" />
                <Title>{Pokemon[this.keys[this.state.indexInObject]][this.state.indexInArray].pokemonName}</Title>
                <ButtonContainer>
                    <Buttons onClick={() => this.handleRequest("PREV")}>PREV</Buttons>
                    <Buttons onClick={() => this.handleRequest("NEXT")} main={true}>NEXT</Buttons>
                </ButtonContainer>
            </Container>
        );
    }
}
export default CardPokemon;
