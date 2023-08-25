import React from 'react';
import './../../../assets/css/home/Footer.css'

export function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='main'>
                    <div className='left'>
                        <div className='title'>
                            PetVoyage
                        </div>
                        <div className='description'>
                            Enjoy your traveling with us
                        </div>
                    </div>
                    <div className='right'>
                        <div className='col-item'>
                            <div className='item-title'>
                                Menu
                            </div>
                            <div className='item'>
                                Home
                            </div>
                            <div className='item'>
                                Destination
                            </div>
                            <div className='item'>
                                About us
                            </div>
                        </div>
                        <div className='col-item'>
                            <div className='item-title'>
                                Booking Plan
                            </div>
                            <div className='item'>
                                Personal Trip
                            </div>
                            <div className='item'>
                                Group Trip
                            </div>
                        </div>
                        <div className='col-item'>
                            <div className='item-title'>
                                Further information
                            </div>
                            <div className='item'>
                                Terms & conditions
                            </div>
                            <div className='item'>
                                Privacy policy
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rights'>
                    @2023 Alexandra Olariu. All rights reserved
                </div>
            </div>
        </>
    );
}

export default Footer;





