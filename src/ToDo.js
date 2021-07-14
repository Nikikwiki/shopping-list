import { IconButton } from '@material-ui/core';
import { DeleteForever, DoneOutline, RemoveCircleOutline } from '@material-ui/icons';

function ToDo({ todo, toggleTask, removeTask }) {
  const TaskCompleteButton = (props) => {
    return (
      <IconButton 
        className="item-todo__icon-button item-todo__done"
        onClick={() => toggleTask(todo.id)}
      >
        <DoneOutline className="item-todo__icon"/>
      </IconButton>
    );
  }

  const TaskNotCompleteButton = (props) => {
    return (
      <IconButton 
        className="item-todo__icon-button item-todo__delete"
        onClick={() => toggleTask(todo.id)}
      >
        <RemoveCircleOutline className="item-todo__icon"/>
      </IconButton>
    );
  }

  const RenderCompleteButton = (props) => {
    console.log(props);
    
    if(!todo.complete) {
      return (<TaskCompleteButton/>)
    } else {
      return (<TaskNotCompleteButton/>)
    }
  }

  return (
    <div key="todo.id" className={todo.complete ? "item-todo item-todo__complete" : "item-todo"}>
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
        <RenderCompleteButton/>
      </div>
    </div>
  );
}

export default ToDo;