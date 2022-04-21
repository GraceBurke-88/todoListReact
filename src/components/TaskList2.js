// code from https://appdividend.com/2020/04/08/how-to-add-and-display-data-in-react-example/

import React from 'react';
import TaskItem from './TaskItem';
import { MakeCard } from './Card';

import TaskList from "./TaskList";

class TaskList2 extends React.Component {

    renderCards() {
        return this.props.tasks.map((card, id) => (<MakeCard key={id} />
        ));
    }


    render() {

        const taskItems = this.props.tasks.map(task => {
            return <TaskItem task={task} key={task.id} markRight={this.markRight} markLeft={this.markLeft} />
        });

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