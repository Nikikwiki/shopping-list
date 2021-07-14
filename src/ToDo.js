import { DoneOutline, DeleteForever } from '@material-ui/icons';
import { IconButton  } from '@material-ui/core';


function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key="todo.id" className="item-todo">
      <div 
        className={todo.complete ? "item-text strike" : ""}
        onClick={() => toggleTask(todo.id)}
        >
        <div className="item-todo__header">
          {todo.task.headerInput} 
        </div>
        <div className="item-todo__body">
          {todo.task.bodyInput}
        </div>
        <div className="item-todo__tools">
          <IconButton className="item-todo__delete">
            <DeleteForever className="item-todo__icon"/>
          </IconButton>
          <IconButton className="item-todo__icon-button item-todo__done">
            <DoneOutline className="item-todo__icon"/>
          </IconButton>
        </div>
      </div>
      {/* <div className="item-delete" onClick={() => removeTask(todo.id)}>X</div> */}
    </div>
  );
}

export default ToDo;