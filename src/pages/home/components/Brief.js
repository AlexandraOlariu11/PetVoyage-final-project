import React from 'react';
import './../../../assets/css/home/Brief.css'

export function Brief() {

    const data = [
        {
            title: "Restaurante pet friendly",
            description: "asda sdas da dasd a d adasdasasd asd  ada d as d a ad asd  ad asdasda das d as dadas d as dasdas da  da s d a d as d a d a d asd a sdasdada dad",
            image: require('../../../assets/img/hotel2.jpg')
        },
        {
            title: "Hoteluri pet friendly",
            description: "asda sdas da dasd a d adasdasasd asd  ada d as d a ad asd  ad asdasda das d as dadas d as dasdas da  da s d a d as d a d a d asd a sdasdada dad",
            image: require("../../../assets/img/restaurant2.jpg")
        },
        {
            title: "Parcuri pet friendly",
            description: "asda sdas da dasd a d adasdasasd asd  ada d as d a ad asd  ad asdasda das d as dadas d as dasdas da  da s d a d as d a d a d asd a sdasdada dad",
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





