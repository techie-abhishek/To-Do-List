import React from 'react'
import Todo from './Todo'
export default function TodoList({filteredTodos,todos,setTodos}) {
    console.log(todos);
    return (
        <div>
            <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo)=>(
                    <Todo setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id} />

                ))}

            </ul>
            </div>
        </div>
    )
}
