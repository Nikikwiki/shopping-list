import { React, useState } from 'react';
import { Button, Input } from '@material-ui/core';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
}

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSubmit(e);
    }
  } 

  return (
    <form 
      onSubmit={handleSubmit}
      className="todo-form"
    >
      <Input 
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />        
      <Button 
        variant="contained" 
        color="primary" 
        type="submit">
      Сохранить</Button>
    </form>
  );
}

export default ToDoForm;