import React from 'react';
import './../../../assets/css/home/Brief.css'

export function Brief() {

    const data = [
        {
            title: "Pet-friendly Hotels",
            description: "Explore lodging options that warmly welcome both you and your beloved pet. Experience the convenience and hospitality of hotels that are pet-friendly, ensuring a delightful stay for both you and your furry companion",
            image: require('../../../assets/img/hotel3.jpg')
        },
        {
            title: "Pet-friendly Restaurants",
            description: "Discover dining spots where you and your furry friend are both welcome. Enjoy the company of your pet while indulging in delicious meals and drinks at pet-friendly restaurants, cafes, and outdoor terraces",
            image: require("../../../assets/img/restaurant2.jpg")
        },
        {
            title: "Pet-friendly Parks",
            description: "Explore pet-friendly parks where you and your four-legged companion can enjoy the outdoors together. These parks provide a safe and welcoming environment for you and your pet to play, relax, and bond amidst nature",
            image: require("../../../assets/img/parc2.jpg")
        }
      ];

    return (
        <>
            <div className='brief-container'>
                {data.map((item, index) => (
                    <div className='brief-item' key={index}>
                        <div className='image'>
                            <img alt="sample_file" src={item.image} />
                        </div>
                        <div className='title'>
                            {item.title}
                        </div>
                        <div className='description'>
                            {item.description}
                        </div>            
                    </div>
                ))}
            </div>
        </>
    );
}

export default Brief;





