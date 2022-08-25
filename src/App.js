import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Body from "./components/Body";

function App() {
    const [todos, setTodos] = useState([{
        id: 0,
        todoText: ""
    }]);
    const [input, setInput] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
            for (let i = 0; i < localStorage.length; i++) {
                console.log(todos);
                console.log(localStorage.getItem(i).id);
                setTodos([...todos, JSON.parse(localStorage.getItem(i))])
            }

    }, [])

    const addContent = () => {
        const todo = { id: index, todoText: input }
        setTodos([...todos, todo]);
        localStorage.setItem(index.toString(), JSON.stringify(todo));
        setIndex(index + 1); 

    }
    const onChange = (e) => {
        setInput(e.target.value)
        console.log(input);
    }

    return (
        <div>
            <Header addContent={addContent} onChange={onChange}/>
            <Body todos={todos}/>
        </div>
    );
}

export default App;
