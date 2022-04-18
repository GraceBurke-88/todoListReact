import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    //console.log(taskList[1]);
    taskList.splice(taskIndex, 1);
    //console.log(this.props);
    this.props.onUpdateTaskList(taskList);
  }


  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });
    //const task1 = taskItems[1];
    //const task2 = taskItems.some(task => task.id >= 5);


   // {console.log(taskItems)}

    let counter = 0;
    for (const obj of taskItems) {
      console.log(obj)
      if (obj.key === '1') counter++;
    }
    console.log(counter); // 6

    //const donetaskItems = this.props.tasks.map(task => {
     // return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    //});

    return (
      <ul className="task-list list-group">
       { taskItems }

      </ul>

    )
  }
}

export default TaskList;