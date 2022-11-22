import React, { Component } from 'react'
import { Button, ButtonContainer, CardContainer, Image } from './styles'

class ComponentClass extends Component {

    state = {
        index: 1,
        character: null
    }

    getData = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.index}`)
            .then(res => res.json())
            .then(resp => {
                //console.log(resp)
                this.setState({ character: resp })
            })
    }

    incrementCount = () => {
        this.setState({ index: this.state.index + 1 });
    }

    drecreaseCount = () => {
        this.setState({ index: this.state.index - 1 });
    }

    //1ER MÉTODO DE CICLO DE VIDA - AL MONTARSE EL COMPONENTE
    componentDidMount() {
        this.getData();
        //LLAMADOS INICIALES A API'S.
    }

    //2DO MÉTODO DE CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTE
    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            this.getData();
        }
    }

    render() {
        console.log("count", this.state.character);
        return (
            <CardContainer>
                <h1>POKEMONS</h1>
                <p>INDEX : {this.state.index}</p>
                <h2>El nombre es: {this.state.character?.species.name}</h2>
                <Image src={this.state.character?.sprites.front_default} />
                <ButtonContainer>
                    <Button onClick={() => this.drecreaseCount()}>Prev Index</Button>
                    <Button onClick={() => this.incrementCount()}>Incrementar Index</Button>
                </ButtonContainer>
                
            </CardContainer>
        );
    }
}
export default ComponentClass;