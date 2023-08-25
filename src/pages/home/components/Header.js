import React from 'react';
import './../../../assets/css/home/Header.css'
import backgroundImage from "../../../assets/img/banner.jpg";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { data } from '../../../assets/mock';


export function Header({ setSelectedCity }) {

    const getCities = () => {
        return data.map((item, index) => ({ id: index, name: item.city}));
    }

    const handleOnSelect = (item) => {
        // the item selected
        setSelectedCity(item);
    }

    const handleOnClear = () => {
        // the item selected
        setSelectedCity(null);
    }

    const formatResult = (item) => {
        return (
            <span>{item.name}</span>
        )
    }

    return (
        <>
            <div style={{ 
                    backgroundImage: `url(${backgroundImage})`
                }} className='header-container'>
                <div className='first-title'>
                Discover and enjoy your new places with your pet
                </div>
                <div className='second-title'>
                Prepare for adventure and unique experiences
                </div>
                <div className='search'>
                    <ReactSearchAutocomplete
                        items={getCities()}
                        onSelect={handleOnSelect}
                        onClear={handleOnClear}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </div>
        </>
    );
}

export default Header;





