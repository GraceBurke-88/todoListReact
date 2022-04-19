import React from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';

import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });
    let tasksTODO = [];
    let InProgress = [];
    let InReview = [];
    let Done = [];
    for (const obj of taskItems) {
      if (obj.props.task.column === 'todo') {
        tasksTODO.push(obj);
        console.log(tasksTODO);
      }
      else if (obj.props.task.column === 'in-progress') {
        InProgress.push(obj);
      }
      else if (obj.props.task.column === 'review') {
        InReview.push(obj);
      }
      else if (obj.props.task.column === 'done') {
        Done.push(obj);
      }

    }

    return (
      <ul className="task-list list-group">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg"><h3>ToDo</h3><br/>
                { tasksTODO }</div>
              <div className="col-lg"><h3>In-Progress</h3><br/>
                { InProgress }</div>
              <div className="col-lg"><h3>Review</h3><br/>
                { InReview }</div>
              <div className="col-lg"><h3>Done</h3><br/>
                { Done }</div>
            </div>
          </div>
        </div>

      </ul>
    )
  }
}

export default TaskList;