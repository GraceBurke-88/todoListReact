// code from https://appdividend.com/2020/04/08/how-to-add-and-display-data-in-react-example/

import React from 'react';
import TaskItem from './TaskItem';
import MakeCard  from './MakeCard';

import TaskList from "./TaskList";

class TaskList2 extends React.Component {

    renderCards() {
        //return this.props.tasks.map((card, id) => (<MakeCard key={id} />));
        return this.props.tasks.map(task => {return <MakeCard task={task} key={task.id} />

        });
    }
    render() {

        const taskItems = this.props.tasks.map(task => {return <TaskItem task={task} key={task.id} column={task.column}  />});

        //console.log(col)


        return (
            <section>
                <div className="row">
                    <div className="col-md-3">
                        <h2 className='page-title'>Tasks</h2>
                    </div>
                </div>
                <div className='row'>
                    {this.renderCards()}

                </div>
            </section>
        )
    }
}
export default TaskList2;