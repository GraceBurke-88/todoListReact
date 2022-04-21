// HotelCard.js

import React from 'react'

export function HotelCard() {
    return (
        <div className="col-md-3 col-xs-6">
            <div className="card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt=""></img>
                <div className="card-body">
                    <p className="card-text">
                        Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited; headquartered at Express Towers, Nariman Point in Mumbai. Incorporated by the founder of the Tata Group, Jamsetji Tata, in 1903, the company is a part of the Tata Group, one of India's largest business conglomerates.
                    </p>
                </div>
            </div>
        </div>
    );
}