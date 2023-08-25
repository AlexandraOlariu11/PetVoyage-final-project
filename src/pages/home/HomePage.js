import React, { useState } from 'react';
import Header from "./components/Header"; 
import './../../assets/css/home/Home.css'
import Footer from './components/Footer';
import Help from './components/Help';
import PopularDestinations from './components/PopularDestinations';
import Explore from './components/Explore';
import Brief from './components/Brief';
import BookingPage from '../booking/BookingPage';


export function HomePage () {

    const [city, setCity] = useState(null);

    const setSelectedCity = (city) => {
      setCity(city);
    }

    return (
      <div className='container home-container'>
        <Header setSelectedCity={setSelectedCity}></Header>
        {city == null && 
          <>
            <PopularDestinations></PopularDestinations>
            <Help></Help>
            <Brief></Brief>
            <Explore></Explore>
          </>
        } 
        {city != null &&
          <BookingPage selectedCity={city}></BookingPage>
        }
        <Footer></Footer>
      </div>
    );
}

export default HomePage;





