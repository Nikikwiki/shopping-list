import React, { useState } from 'react';
import { IconButton, Slide, Dialog, InputBase, TextareaAutosize, DialogContent } from '@material-ui/core';
import { DeleteForever, Done, RemoveCircleOutline, Cancel, Save } from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ToDo({ todo, toggleTask, removeTask, editTask }) {
  const [open, setOpen] = React.useState(false);
  const [headerInput, setHeaderInput] = useState(todo.task.headerInput);
  const [bodyInput, setBodyInput] = useState(todo.task.bodyInput);

  const handleHeaderInputChange = (e) => {
    setHeaderInput(e.target.value); 
  }

  const handleBodyInputChange = (e) => {
    setBodyInput(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const RenderCompleteButton = ({ complete }) => {
    return(
      <IconButton 
        className={
          todo.complete ? 
          "item-todo__icon-button item-todo__delete ignore-elements" : 
          "item-todo__icon-button item-todo__done ignore-elements"
        }
        onClick={(e) => {
          e.stopPropagation();
          toggleTask(todo.id);
        }}
      >
      {complete ? (
        <RemoveCircleOutline className="item-todo__icon"/>
      ) : (
        <Done className="item-todo__icon"/>
      )}
      </IconButton>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(headerInput.trim() !== '' || bodyInput.trim() !== '') {
      const userInput = {headerInput, bodyInput}
      editTask(todo.id, userInput)
      handleClose();
    }
}

  return (
    <div>
      <div 
        className={todo.complete ? "item-todo item-todo__complete" : "item-todo"}
        onClick={handleClickOpen}
        >
        <div className="item-todo__header">
          {todo.task.headerInput}
        </div>
        <div className="item-todo__body">
          {todo.task.bodyInput}
        </div>
        <div className="item-todo__tools">
          <IconButton 
            className="item-todo__delete"
            onClick={() => removeTask(todo.id)}
          >
            <DeleteForever className="item-todo__icon"/>
          </IconButton>
          <RenderCompleteButton onClick={(e) => e.preventDefault()} complete={todo.complete}/>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogContent>
          <form 
            onSubmit={handleSubmit}
            className="dialog-form"
          >
            <div className="dialog-form__textblock">
              <InputBase 
                value={headerInput}
                type="text"
                onChange={handleHeaderInputChange}
                placeholder="Введите заголовок"
                className="dialog-form__input"

              />  

              <TextareaAutosize  
                className="dialog-form__textarea"
                onChange={handleBodyInputChange}
                value={bodyInput}
                type="text"
                placeholder="Заметка..."
              />   

              <div className="dialog-form__tools">
              <IconButton 
                onClick={handleClose}
                variant="contained" 
                type="button">
                <Cancel className="dialog-form__cancel"/>
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ToDo;