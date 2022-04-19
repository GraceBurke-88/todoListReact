import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      { props.task.title }
      <button type="button"
              onClick={() => props.markRight(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Right
        </button>
       <button type="button"
               onClick={() => props.markLeft(props.task)}
               className="btn btn-primary" style={{ float: 'right' }}>
         Left
         </button>

    </li>
  )
};

export default TaskItem;