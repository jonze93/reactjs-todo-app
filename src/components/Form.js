import React from 'react';
import nextId from "react-id-generator";

const Form = ({setInputText, inputText, setInputTime, inputTime, setInputDate, inputDate, todos, setTodos,  setStatus, timeStatus, setTimeStatus}) =>{

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const inputTimeHandler = (e) => {
        setInputTime(e.target.value);
        console.log(e.target.value);

       var today = new Date();
       var curTime = today.getHours()+':'+today.getMinutes;

       if(curTime >= e.target.value){
        setTimeStatus("passed");
       }



    };




   const inputDateHandler = (e) => {
        setInputDate(e.target.value);

        console.log(inputDate);
    };


    const submitTodoHandler = (e) => {
        e.preventDefault();

        var todoId = nextId();
        
        setTodos([
            ...todos, {text: inputText,time: inputTime, date: inputDate, passed: false ,completed: false, id: todoId}
        ]);
        setInputText("");
        setInputTime("");
        setInputDate("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" />

        

            <input value={inputTime} onChange={inputTimeHandler} type="time" />


            <button onClick={submitTodoHandler} type="submit">
                <i>Lägg till</i>
            </button>
            <div>
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;