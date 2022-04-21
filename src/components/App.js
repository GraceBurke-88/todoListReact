import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import MoveTasks from './MoveTasks'

import TaskList2  from './TaskList2';
import {Card} from "./Card";
//import AddTask from './AddTask';

class App extends React.Component {
  state = {
    tasks: [],
    errorMessage: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }



  render() {
    return (
      <div className="container">
        <h1>To Do List</h1><hr/>
        <div className="container">

          <TaskList2 tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
        </div>

        <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />


      </div>
    );
  }

}


export default App;