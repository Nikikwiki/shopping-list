import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import {Button} from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState([]);
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
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete} : {...todo })
    ])
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
        />
      )
    }
  }

  return (
    <div className="app">
      <Creation  isTapped={isTapped} />
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
