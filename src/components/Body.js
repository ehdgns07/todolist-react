import React from "react";
import styled from "styled-components";

const BodyOuter = styled.div`
    display : flex;
    justify-content : center;
`

const BodyInner = styled.div`
    background : #B2A4FF;
    width : 500px;
    padding : 3rem;
`

const IdSpan = styled.span`
    margin-right : 3rem;
`


function Body({todos}) {
    return (
        <BodyOuter>
            <BodyInner>{
                todos.map((item)=>{
                    return (
                        <div>
                            <IdSpan>{item.id}</IdSpan>
                            <span>{item.todoText}</span>
                        </div>
                    )
                })
            }</BodyInner>
        </BodyOuter>
    );
}

export default Body