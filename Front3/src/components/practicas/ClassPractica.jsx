import React, { Component } from 'react'
import { Button, ButtonContainer, CardContainer, IndexContainer } from '../week_5/mesa_2/styles';

class ClassPractica extends Component {

    state = {
        index: 1,
        comments: null
    }

    getData = async () => {

        fetch(`https://jsonplaceholder.typicode.com/comments/${this.state.index}`)
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                this.setState({ comments: resp })
            })
    }

    incrementCount = () => {
        this.setState({ index: this.state.index + 1 });
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.index !== this.state.index) {
            this.getData();
        }
    }

    render () {
        return(
            <CardContainer>
                <h1>COMMENTS</h1>
                <IndexContainer>
                    <p><u>INDEX:</u> {this.state.index}</p>
                </IndexContainer>
                <h2><u>Name of comment:</u> {this.state.comments?.name}</h2>
                <h3><u>Comment:</u> {this.state.comments?.body}</h3>
                <ButtonContainer>
                    <Button onClick={() => this.incrementCount()} main={true}>Increment Index</Button>
                </ButtonContainer>
            </CardContainer>
        )
    }
}

export default ClassPractica;