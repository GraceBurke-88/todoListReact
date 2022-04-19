import React from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';

import TaskItem from './TaskItem';

class TaskList extends React.Component {
/*
  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    //console.log(taskList[1]);
    taskList.splice(taskIndex, 1);
    //console.log(this.props);
    this.props.onUpdateTaskList(taskList);
  }

*/
  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });
    //const task1 = taskItems[1];
    //const task2 = taskItems.some(task => task.id >= 5);


   // {console.log(taskItems)}

    //let counter = 0;
    let tasksYES = [];
    for (const obj of taskItems) {
      //console.log(obj.props.task.column)
      if (obj.props.task.column === 'todo') {
        tasksYES.push(obj);
        console.log(tasksYES)
        //counter++;
      }
    }
    //console.log(counter); // 6

    //const donetaskItems = this.props.tasks.map(task => {
     // return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    //});

    return (
      <ul className="task-list list-group">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg">Column 1<br/>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>

                {tasksYES}</div>
              <div className="col-lg">Column 2<br/>
                {'hello1'}</div>
              <div className="col-lg">Column 3<br/>
                {'hello2'}</div>
              <div className="col-lg">Column 4<br/>
                {'hello2'}</div>
            </div>



          </div>
        </div>

      </ul>



    )
  }
}

export default TaskList;