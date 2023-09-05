import React from 'react'
import '../../../assets/img/contactmap.jpg';
import './../../../assets/css/contact/ContactMap.css';

export  function ContactMap() {
  return (
    <div className='ContactMapStyles'>
      <div className="container">
        <div className="map__card">
            <h3 className="map__card__heading"> PetVoyage</h3>
            <p className="background-style">
                sector 1, Bucuresti
            </p>
            <a href="https://goo.gl/maps/txKvEKdMkUVfNZjT7"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
            >
                Open in Google Map
            </a>
        </div>
      </div>
    </div>
  )
};

export default  ContactMap
