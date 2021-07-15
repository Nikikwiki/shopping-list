import { IconButton } from '@material-ui/core';
import { DeleteForever, DoneOutline, RemoveCircleOutline } from '@material-ui/icons';

function ToDo({ todo, toggleTask, removeTask }) {

  const RenderCompleteButton = ({ complete }) => {
    console.log(complete);
    return(
      <IconButton 
        className={
          todo.complete ? 
          "item-todo__icon-button item-todo__delete ignore-elements" : 
          "item-todo__icon-button item-todo__done ignore-elements"
        }
        onClick={() => toggleTask(todo.id)}
      >
      {complete ? (
        <RemoveCircleOutline className="item-todo__icon"/>
      ) : (
        <DoneOutline className="item-todo__icon"/>
      )}
      </IconButton>
    );
  }

  return (
    <div 
      className={todo.complete ? "item-todo item-todo__complete" : "item-todo"}
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
        <RenderCompleteButton complete={todo.complete}/>
      </div>
    </div>
  );
}

export default ToDo;