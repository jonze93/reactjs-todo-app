import React from "react";

const ToDo = ({text, time, date, todo , todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }
    
    return(
        <div className={`${todo.passed ? "passed": ''}`}>
            <li className={`${todo.completed ? "completed": ''}`}>
                {text + ' ' + date + ' ' + time}
            </li>
            <button onClick={completeHandler}>check</button>
            <button onClick={deleteHandler}>delete</button>
        </div>
    );
};

export default ToDo;