import React from 'react';
import Card from 'react-bootstrap/Card';

const TaskItem = props => {
  return (
    <div style={{min_height:'0', margin:'1rem'}}>
      <Card>
          <Card.Body>
          <Card.Title > { props.task.title } </Card.Title>
          <Card.Text> ID: { props.task.id }  <br/> Type: { props.task.type }</Card.Text> <br/>
        { props.task.column !== "done" ?
            <button type="button"
              onClick={() => props.markRight(props.task)}
              className="btn btn-link" style={{ float: 'right' }}>
                { props.task.column === "todo" ? "Start Work >" : null }
                { props.task.column === "in-progress" ? "Request Review >" : null }
                { props.task.column === "review" ? "Mark Done >" : null }
        </button> : null }
        { props.task.column !== "todo" ?
        <button type="button"
              onClick={() => props.markLeft(props.task)}
              className="btn btn-link" style={{ float: 'right' }}>
            { props.task.column === "in-progress" ? "< Send Back" : null }
            { props.task.column === "review" ? "< More Work Required" : null }
            { props.task.column === "done" ? "< Request Re-Review" : null }
      </button> : null }
        </Card.Body>
      </Card>
    </div>
  )
};

export default TaskItem;
