import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import {Button, TextField, InputAdornment, AppBar, Toolbar, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';


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

  const toggleForm = () => {
    setTapped(isTapped = !isTapped);
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
          toggleForm={toggleForm}
        />
      )
    }
  }

  const SearchInput = (props) => {
    return (
      <div className="search-input">
      <TextField 
        label="Поиск" 
        variant="outlined" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />

      </div>
    )
  }

  return (
    <div className="app">

    <AppBar position="static">
      <Toolbar>
        <SearchInput className="search-input__icon"/>
      </Toolbar>
    </AppBar>

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
