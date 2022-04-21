import React from 'react';

import Row from 'react-bootstrap/Row';
//import {data} from '../../../data'
import Product  from './Cards';
import TaskItem from "./TaskItem";
import {render} from "react-dom";


const List = () => {

    render()
    {const taskItems = this.props.tasks.map(task => {
            return <TaskItem task={task} key={task.id} markRight={this.markRight} markLeft={this.markLeft} />
        });

    return (

        <div className='row-wrapper'>
            <Row>
                taskItems
            </Row>
        </div>
    )

}

export default List;