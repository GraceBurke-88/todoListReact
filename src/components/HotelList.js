// HotelList.js
// code from https://appdividend.com/2020/04/08/how-to-add-and-display-data-in-react-example/

import React, { Component } from 'react';
import { HotelCard } from './HotelCard';

export class HotelList extends Component {

    constructor() {
        super();
        this.state = {
            hotels: [1, 1, 1]
        }
    }

    renderHotels() {
        return this.state.hotels.map((hotel, i) => (
            <HotelCard key={i} />
        ));
    }

    addHotelRoom() {
        const hotels = this.state.hotels;
        hotels.push(1);
        this.setState({
            hotels
        });
    }

    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-md-3">
                        <h2 className='page-title'>Hotel Rooms</h2>
                    </div>
                    <div className="col-md-6">
                        <button onClick={() => { this.addHotelRoom() }} className="btn btn-dark">Add Room</button>
                    </div>
                </div>
                <div className='row'>
                    {this.renderHotels()}
                </div>
            </section>
        )
    }
}