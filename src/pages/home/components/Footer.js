import React from 'react';
import './../../../assets/css/home/Footer.css'
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';


const FooterItemStyles = styled.div`
text-decoration: none;
`;

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
                        We're here to make your journey with your pet easier and more enjoyable.
                        </div>
                    </div>
                    <div className='right'>
                        <div className='col-item'>
                            <div className='item-title'>
                                Menu
                            </div>
                            <FooterItemStyles>
                            <Link to='/'>Home</Link>
                            </FooterItemStyles>
                            <FooterItemStyles>
                            <Link to='/about'>About us</Link>
                            </FooterItemStyles>
                            <div className='item'>
                            <Link to='/contact'>Contact</Link>
                            </div>
                        </div>
                        <div className='col-item'>
                            <div className='item-title'>
                                Further information
                            </div>
                            <div className='item'>
                                Terms & Conditions
                            </div>
                            <div className='item'>
                                Privacy Policy
                            </div>
                            <div className='item'>
                            Cookie Policy
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rights'>
                    @2023 Alexandra Olariu. All rights reserved.
                </div>
            </div>
        </>
    );
}

export default Footer;





