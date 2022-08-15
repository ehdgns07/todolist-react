import React, {useState} from "react";
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

const BtnModify = styled.span`
    
`


function Body({todos}) {

    const [isModify, setIsModify] = useState(false);

    return (
        <BodyOuter>
            <BodyInner>{
                todos.map((item)=>{
                    return (
                        <div>
                            <IdSpan>{item.id}</IdSpan>
                            <span>{item.todoText}</span>
                            <BtnModify>
                            <button onClick={()=>{setIsModify(true)}}>modify</button>
                            <button>delete</button>
                            </BtnModify>
                            {isModify && <input type={"text"}/>}
                        </div>
                    )
                })
            }</BodyInner>
        </BodyOuter>
    );
}

export default Body