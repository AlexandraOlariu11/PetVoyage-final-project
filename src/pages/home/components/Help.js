import React from 'react';
import './../../../assets/css/home/Help.css'
import icon4 from './../../../assets/img/icon4.png';
import icon2 from './../../../assets/img/icon2.png';
import icon5 from './../../../assets/img/icon5.png';


export function Help() {
    return (
        <>
            <div className='help-container'>
                <div className='top'>
                    <div className='title'>
                    How can we help your journey
                    </div>
                    <div className='sub-title'>
                    With PetVoyage, you can discover the most beautiful locations for you and your pet friend
                    </div>
                </div>
                <div className='bottom'>
                    <div className='item'>
                        <div className='item-icon'>
                        <img src={icon4} alt="plane icon" />
                        </div>
                        <div className='item-title'>
                            Find your destination
                        </div>
                        <div className='item-description'>
                            Find your travel destination. Choose the city you want to visit with your furry friend
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-icon'>
                        <img src={icon2} alt="pin icon" />
                        </div>
                        <div className='item-title'>
                            Choose your favourite pet-friendly location
                        </div>
                        <div className='item-description'>
                        After you've found the travel destination, check the list of available pet-friendly locations in the selected city
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-icon'>
                        <img src={icon5} alt="pet icon" />
                        </div>
                        <div className='item-title'>
                            Prepare your pet for travel
                        </div>
                        <div className='item-description'>
                        Pack your bags. Get ready for unique experiences with your best friend
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Help;





