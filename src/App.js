import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import HeaderBar from './HeaderBar';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import { ReactSortable } from "react-sortablejs";



function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : []);
  let [searchedTodos, setSearchedTodos] = useState(todos ? todos : []);
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
      setSearchedTodos([...todos, newItem]);
      localStorage.setItem('todos', JSON.stringify([...todos, newItem]));
    }
  }

  const toggleForm = () => {
    setTapped(isTapped = !isTapped);
  }

  const removeTask = (id) => {
    const filteredTodos = [...todos.filter((todo) => todo.id !== id)];
    setTodos(filteredTodos);
    setSearchedTodos(filteredTodos);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
  }

  const handleToggle = (id) => {
    const newTodos = [
      ...todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete} : {...todo })
    ];
    setTodos(newTodos);
    setSearchedTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const searchItems = (event) => {
    const stringToSearch = event.target.value.trim();
    searchedTodos = [
      ...todos.filter((todo) =>
        todo.task.headerInput.includes(stringToSearch) || todo.task.bodyInput.includes(stringToSearch)
      )
    ]
    setSearchedTodos(searchedTodos);
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
      <HeaderBar  searchItems={searchItems}/>
      <Creation />
      <ReactSortable 
        list={searchedTodos} 
        setList={setSearchedTodos}
        className="sorted-list"
        preventOnFilter
        filter=".ignore-elements"
        >
        {searchedTodos.map((todo) => {
          return(
          <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
          />
          )
        })}
      </ReactSortable>

    </div>
  )
}

export default App;
