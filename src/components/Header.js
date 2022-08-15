import React from "react";
import styled from "styled-components"

const Outer = styled.div `
    display : flex;
    justify-content : center;
`

const Top = styled.div`
    background : #FFB4B4;
    margin-top : 5rem;
    padding : 3rem;
    width : 500px;
`;

// 추가할 todoList를 입력하는 부분
const InputText = styled.div`
    text-align : right;
    padding-top : 3rem;
`
const Text = styled.input`
    width : 400px;
    margin-right : 30px;
`

const Title = styled.div`
    text-align : center;
    background : red;
`

const AddContent = styled.span`
    border : 1px solid black;
    border-radius : 5px;
    background : #FFDEB4;
`

function Header({addContent, onChange}) {
    return (
        <Outer>
        <Top>
            <Title>
                TODO LIST
            </Title>
            <InputText>
            <Text type={"text"} onChange={onChange}/>
            <AddContent
                onClick={() => { addContent(); }}>Create!</AddContent>
            </InputText>
        </Top>
        </Outer>
    );
}

export default Header
