import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, ButtonContainer, CardContainer, IndexContainer } from '../week_5/mesa_2/styles';

const FunctionPractica = () => {

    const [index, setIndex] = useState(1);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${index}`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }, [index])

    return (
        <CardContainer>
            <h1>COMMENTS</h1>
            <IndexContainer>
                <p><u>INDEX:</u> {index}</p>
            </IndexContainer>
            <h2><u>Name of comment:</u> {comments?.name}</h2>
            <h3><u>Comment:</u> {comments?.body}</h3>
            <ButtonContainer>
                <Button onClick={() => setIndex(index + 1)} main={true}>Increment Index</Button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default FunctionPractica