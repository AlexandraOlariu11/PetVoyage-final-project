import React, { useState } from 'react';
import './../../../assets/css/booking/Filter.css'

export function Filter({ setSelectedFilter, selectedFilter }) {

    const filterValues = [
        {
            id: 0,
            name: "All"
        },
        {
            id: 1,
            name: "Hotels"
        },
        {
            id: 2,
            name: "Restaurants"
        },
        {
            id: 3,
            name: "Parks"
        },
    ]


    return (
      <div className='filter-container'>
        {filterValues.map((filter, index) => (
            <div onClick={() => setSelectedFilter(filter)} className={filter.id == selectedFilter.id ? 'filter-item f-selected' : 'filter-item'} key={index}>
                {filter.name}
            </div>
        ))}
      </div>
    );
}

export default Filter;





