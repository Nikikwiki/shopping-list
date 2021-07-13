import { React, useState } from 'react';
import { Button, Input, TextareaAutosize } from '@material-ui/core';

function ToDoForm({ addTask }) {
  const [headerInput, setHeaderInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const handleHeaderInputChange = (e) => {
    setHeaderInput(e.currentTarget.value); 
  }

  const handleBodyInputChange = (e) => {
    setBodyInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // addTask(userInput);
    // setUserInput("");
}

  return (
    <form 
      onSubmit={handleSubmit}
      className="todo-form"
    >
      <div className="todo-form__textblock">
        <Input 
          value={headerInput}
          type="text"
          onChange={handleHeaderInputChange}
          placeholder="Введите заголовок..."
        />  

        <TextareaAutosize  
          className="todo-form__textarea"
          onChange={handleBodyInputChange}
          value={bodyInput}
          type="text"
          placeholder="Заметка..."
        />   
      </div>
      <Button 
        variant="contained" 
        color="primary" 
        type="submit">
      Сохранить</Button>
    </form>
  );
}

export default ToDoForm;