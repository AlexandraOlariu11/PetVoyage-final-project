import React from 'react';
import './../../../assets/css/home/PopularDestinations.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function PopularDestinations() {

    const images = [
        require('../../../assets/img/brasov.jpg'),
        require("../../../assets/img/bucuresti.jpg"),
        require("../../../assets/img/Cluj.jpg"),
        require("../../../assets/img/Constanta.jpg"),
        require("../../../assets/img/iasi.jpg"),
        require("../../../assets/img/sibiu.jpg"), 
      ];

    return (
        <>
            <div className='popular-destinations-container'>
                <div className='title'>
                    PetVoyage popular destinations
                </div>
                <div className='sub-title'>
                    See the beauty of the world easily and safelu with us
                </div>
                <div className='carousel'>
                    <Carousel useKeyboardArrows={true}>
                        {images.map((url, index) => (
                            <div className="slide" key={index} >
                                <img alt="sample_file" src={url} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default PopularDestinations;

