import React from 'react';
import './../../../assets/css/home/Explore.css'

export function Explore() {

    const images = [
        require('../../../assets/img/img1section.jpg'),
        require("../../../assets/img/img2section.jpg"),
        require("../../../assets/img/img3section.jpg"),
      ];

    return (
        <>
            <div className='explore-container'>
               <div className='title'>
               Embark on exciting adventures with your furry companion
               </div>
               <div className='images'>
                    {images.map((url, index) => (
                            <div className='image' key={index}>
                                <img alt="sample_file" src={url} />
                            </div>
                    ))}
               </div>
            </div>
        </>
    );
}

export default Explore;





