import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form.js';
import ToDoList from './components/ToDoList';

function App() {

  //States
  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [timeStatus, setTimeStatus] = useState("");

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState ([]);


  //useEffect
  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  //Funktioner
  //Funktion för att visa olika uppgifter beroende på status
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo =>todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo =>todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };


//spara listan lokalt
const saveLocalTodos = () => {
   localStorage.setItem('todos', JSON.stringify(todos));
};
  
  return (
    <div className="App">
      <Form 
        inputText={inputText}
        inputTime={inputTime}
        setInputText={setInputText}
        setInputTime={setInputTime}

        timeStatus={timeStatus}
        setTimeStatus={setTimeStatus}

        todos={todos} 
        setTodos={setTodos}  
        setStatus={setStatus}
      />
      <ToDoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;