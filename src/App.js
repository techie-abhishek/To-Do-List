import React, {useState,useEffect} from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);
  useEffect ( () => {
    getLocalTodos();
  }, [] );
  useEffect(()=>{
    filterHandler();
    saveToLocal();
  },[todos,status]);
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) =>todo.completed === true ));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) =>todo.completed === false ));
        break;
      default:
        setFilteredTodos(todos);
    }
  }
  const saveToLocal = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }
  return (
    <div className="App">
      <header>
      <h1>My to do list</h1>
      </header>
      <Form
      inputText={inputText}
      todos={todos}
      setInputText={setInputText}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList 
      filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
