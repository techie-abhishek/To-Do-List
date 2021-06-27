import React from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function Form({inputText,setInputText,todos,setTodos,setStatus}) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitTododHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText,completed:false,id:Math.random()*1000},
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
    return (
        <div>
             <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <Button onClick={submitTododHandler} style={{backgroundColor: "#3385ff", color:"white", height:"54px", fontSize:"25px"}} className="todo-button {classes.button}" type="submit" variant="contained"
        size="large"
        startIcon={<SaveIcon />} >Add
      </Button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
        </div>
    )
}
