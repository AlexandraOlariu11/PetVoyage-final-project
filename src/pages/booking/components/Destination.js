import React, { useState } from 'react';
import './../../../assets/css/booking/Destination.css'

export function Destination({ destination }) {

    console.log(destination);
    
    return (
      <div className='destination-container'>
        <div className='cover'>
            <img alt="cover" src={require(`../../../assets/img/pagini-locatii/${destination.cover}`)} />
        </div>
        <div className='details'>
            <div className='name'>
                {destination.name}
            </div>

            <div className='short-description'>
                {destination.short_description}
            </div>
            <div className='long-description'>
                {destination.long_description}
            </div>
            <div className='adress'>
                {destination.adress}
            </div>
            <div className='phone'>
                {destination.phone}
            </div>
        </div>
      </div>
    );
}

export default Destination;





