import React from 'react';
import ContactSection from "./components/ContactSection";
import Footer from './../home/components/Footer';
import ContactImage from "./components/ContactImage";
import ContactMap from './components/ContactMap';


export default function Contact() {
    return (
        <div>
            <ContactImage/>
            <ContactSection/>
            <ContactMap/>
            <Footer></Footer>
        </div>
    );
}