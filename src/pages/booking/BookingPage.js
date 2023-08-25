import React, { useState } from 'react';
import './../../assets/css/booking/Booking.css'
import Filter from './components/Filter';
import { data } from '../../assets/mock';
import Destination from './components/Destination';


export function BookingPage ({ selectedCity }) {

    const [selectedFilter, setSelectedFilter] = useState({
        id: 0,
        name: "All"
    }); //all as selected filter

    const setFilter = (filter) => {
        setSelectedFilter(filter);
    }

    const getDestinations = () => {
        var cityData = data.find(d => d.city == selectedCity.name);
        if(selectedFilter.id == 0){
            //combine all destinations from all types
            return [...cityData.places.hotels, ...cityData.places.restaurants, ...cityData.places.parks];
        } else {
            if(selectedFilter.id == 1) {
                return cityData.places.hotels;
            }
            if(selectedFilter.id == 2) {
                return cityData.places.restaurants;
            }
            if(selectedFilter.id == 3) {
                return cityData.places.parks;
            }
        }
        return [];
    }

    return (
      <div className='booking-container'>
        <div className='title'>
            Popular destinations for you
        </div>
        <div>
            <Filter setSelectedFilter={setFilter} selectedFilter={selectedFilter}></Filter>
        </div>
        <div className='destinations'>
            {getDestinations().map((place, index) => (
                <Destination destination={place}></Destination>
            ))}
        </div>
      </div>
    );
}

export default BookingPage;





