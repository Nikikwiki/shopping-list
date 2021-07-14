import { TextareaAutosize, InputBase, IconButton  } from '@material-ui/core';
import { React, useState } from 'react';
import { Save, Cancel } from '@material-ui/icons';



function ToDoForm({ addTask, toggleForm }) {
  const [headerInput, setHeaderInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const handleHeaderInputChange = (e) => {
    setHeaderInput(e.currentTarget.value); 
  }

  const handleBodyInputChange = (e) => {
    setBodyInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = {headerInput, bodyInput}
    if(headerInput.trim() !== "" || bodyInput.trim() !== "") {
      addTask(a);
      setHeaderInput("");
      setBodyInput("");
    }
}

  return (
    <form 
      onSubmit={handleSubmit}
      className="todo-form"
    >
      <div className="todo-form__textblock">
        <InputBase 
          value={headerInput}
          type="text"
          onChange={handleHeaderInputChange}
          placeholder="Введите заголовок"
          className="todo-form__input"
        />  

        <TextareaAutosize  
          className="todo-form__textarea"
          onChange={handleBodyInputChange}
          value={bodyInput}
          type="text"
          placeholder="Заметка..."
        />   

        <div className="todo-form__tools">
        <IconButton 
          onClick={toggleForm}
          variant="contained" 
          type="button"
          color="warning">
          <Cancel className="todo-form__cancel"/>
        </IconButton>

        <IconButton 
          variant="contained" 
          color="primary" 
          type="submit">
          <Save/>
        </IconButton>
        </div>

      </div>
    </form>
  );
}

export default ToDoForm;