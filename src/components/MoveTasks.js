import React from 'react';
import TaskItem from './TaskItem';
import TaskList from "./TaskList";

class MoveTasks extends React.Component {
    markRight = (task) => {
        //const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
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
            return <TaskItem task={task} key={task.id} markRight={this.markRight} markLeft={this.markLeft}/>
        });

        return ('hello')
    }
}



export default MoveTasks;