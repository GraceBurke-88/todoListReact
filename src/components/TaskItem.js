import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      { props.task.title }
        { props.task.column !== "done" ?
            <button type="button"
              onClick={() => props.markRight(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
                { props.task.column === "todo" ? "Start Work >" : null }
                { props.task.column === "in-progress" ? "Request Review >" : null }
                { props.task.column === "review" ? "Mark Done >" : null }
        </button> : null }
        { props.task.column !== "todo" ?
        <button type="button"
              onClick={() => props.markLeft(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
            { props.task.column === "in-progress" ? "< Send Back" : null }
            { props.task.column === "review" ? "< More Work Required" : null }
            { props.task.column === "done" ? "< Request Re-Review" : null }
      </button> : null }
    </li>
  )
};

export default TaskItem;
