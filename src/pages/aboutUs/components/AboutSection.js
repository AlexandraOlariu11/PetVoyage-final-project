import React from 'react'
import './../../../assets/css/aboutUs/DespreNoi.css';
import PText from '../../../components/PText';
import AboutImg from './../../../assets/img/banner2.jpg';
import Button from '../../../components/Button';

export function AboutSection() {
  return (
    <div className="AboutSectionStyle">
        <h2 className="h2style">Your Gateway to Pet-Friendly Adventures</h2>
       <div className="container">
            <div className="aboutSection__left">
               <PText>Welcome to our pet-loving travel platform! At PetVoyage, we're passionate about connecting fellow animal enthusiasts with extraordinary travel experiences. Our platform is a haven for those who share a deep love for both exploring new places and enjoying them with their furry companions.</PText>

               <PText>As avid travelers ourselves, we recognized the need for a dedicated space that curates pet-friendly destinations in cities across the globe. Our mission is to empower you, the animal-loving traveler, with a wealth of information about pet-friendly accommodations, restaurants, cafes, parks, and more, ensuring that your journey is as enjoyable for your four-legged friend as it is for you.</PText>

               <PText>Our platform thrives on the shared enthusiasm of our community. Users contribute their insights, tips, and recommendations, making it an invaluable resource for fellow animal lovers seeking enriching and memorable adventures. With an ever-growing collection of pet-friendly locales, we strive to make traveling with your beloved companions an effortless and delightful experience.</PText>

               <PText>Whether you're seeking a charming pet-welcoming hotel, a cozy cafe where your pup is welcomed with a smile, or a serene park to explore together, PetVoyage is your trusted guide to creating unforgettable moments with your pets. Join us on this exciting journey and let's embark on pet-friendly escapades together!"</PText>
               <div className="aboutSection__buttons">
             <Button btnLink="/home" btnText="Destinations"/>
             <Button btnLink="/contact" btnText="Contact" outline/>
          </div>
          </div>
          <div className="aboutSection__right">
            <img src={AboutImg} alt="travel with your pet" class="AboutImg"/>
          </div>
       </div>
    </div>
  )
}

export default AboutSection;



