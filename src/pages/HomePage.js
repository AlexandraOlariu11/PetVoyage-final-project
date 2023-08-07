import React, { useEffect, useState } from "react";
import mockData from "../assets/mock";
import NavbarContainer from  "../containers/NavbarContainer";
import PopularDestinationsHP from "../containers/PopularDestinationsHP";
import HowItWorksContainer from "../containers/HowItWorksContainer";
import ContentHomepageContainer from "../containers/ContentHomepageContainer";
import ImagesContainerHP from "../containers/ImagesContainerHP";
import FooterContainer from "../containers/FooterContainer";
import TitleComponent from "../components/TitleComponent";

function HomePage () {
    return (
      <div className="container"> 
      <h1>PetVoyage - Descoperă localuri pet-friendly în călătoriile tale!</h1>;
       <TitleComponent/>
    </div>
     );
};


export default HomePage;