
import React from 'react'
import Card from 'react-bootstrap/Card';
import TaskItem from "./TaskItem";


const MakeCard = props => {


    return (
        <div>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                   <Card.Title>Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <button type="button" className="btn btn-link">Move to left</button>
                    <button type="button" className="btn btn-link">Move to Right</button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default MakeCard;

//      { tasks[id].title }

