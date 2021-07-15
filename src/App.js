import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import HeaderBar from './HeaderBar';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : []);
  let [isTapped, setTapped] = useState(false);

  const addTask = (userInput) => {
    setTapped(isTapped = !isTapped);
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem]);
      localStorage.setItem('todos', JSON.stringify([...todos, newItem]));
    }
  }

  const toggleForm = () => {
    setTapped(isTapped = !isTapped);
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    const newTodos = [
      ...todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete} : {...todo })
    ];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const Creation = () => {
    if(!isTapped) {
      return (
        <div className="create-button">
        <Button
          variant="contained" 
          color="primary" 
          type="submit"
          onClick={() => {
            setTapped(isTapped = !isTapped);
          }}
        >Создать заметку</Button>
        </div>
      )
    } else {
      return (
        <ToDoForm 
          addTask={addTask}  
          toggleForm={toggleForm}
        />
      )
    }
  }

  return (
    <div className="app">
      <HeaderBar/>
      <Creation />
      <div className="app__todos">
        {todos.map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
              />
          )
        })}
      </div>
    </div>
  )
}

export default App;
