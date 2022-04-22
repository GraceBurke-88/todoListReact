import React from 'react';
import TaskItem from './TaskItem';
import Card from "react-bootstrap/Card";

class TaskList extends React.Component {
  markRight = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    //console.log("BLAH" + task.column)
    let col = task.column
    if (col === 'todo') {
      task.column = "in-progress"
    }
    if (col === 'in-progress') {
      task.column = "review"
    }
    if (col === 'review') {
      task.column = "done"
    }
    this.props.onUpdateTaskList(taskList);
  }
  markLeft = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    //console.log("BLAH" + task.column)
    let col = task.column
    if (col === 'in-progress') {
      task.column = "todo"
    }
    if (col === 'review') {
      task.column = "in-progress"
    }
    if (col === 'done') {
      task.column = "review"
    }
    this.props.onUpdateTaskList(taskList);
  }

  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markRight={this.markRight} markLeft={this.markLeft} />
    });

    let tasksTODO = [];
    let InProgress = [];
    let InReview = [];
    let Done = [];
    for (const obj of taskItems) {
      if (obj.props.task.column === 'todo') {
        tasksTODO.push(obj);
        //tasksTODO.push(obj.props.task.column)
        //tasksTODO.push(obj.props.task.type)
        //console.log(tasksTODO);
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
    // <div className="col-lg"><h3>ToDo</h3><br/>
    //                 { tasksTODO }</div>



    console.log('hello')
    return (
      <ul className="task-list list-group">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg" style={{background:'lightgrey'}}><h3>ToDo</h3><br/>

                { tasksTODO }</div>
              <div className="col-lg" style={{background:'grey'}}><h3>In-Progress</h3><br/>
                { InProgress }</div>
              <div className="col-lg" style={{background:'lightgray'}}><h3>Review</h3><br/>
                { InReview } </div>
              <div className="col-lg" style={{background:'gray'}}><h3>Done</h3><br/>
                { Done }</div>
            </div>
            <div>

          </div>
        </div>
        </div>
      </ul>
    )
  }
}

export default TaskList;
