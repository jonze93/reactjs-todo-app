import React from "react";
import ToDo from './ToDo';

const ToDoList = ({todos, setTodos, filteredTodos}) => {

    return(
        <div>
            <ul>
                {filteredTodos.map(todo => (
                    <ToDo
                    todo={todo} 
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    text={todo.text}
                    time={todo.time}
                    date={todo.date}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;