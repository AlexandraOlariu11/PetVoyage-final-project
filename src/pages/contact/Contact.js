import React from 'react';
import ContactSection from "./components/ContactSection";
import Footer from './../home/components/Footer';
import ContactImage from "./components/ContactImage";


export default function Contact() {
    return (
        <div>
            <ContactImage/>
            <ContactSection/>
            <Footer></Footer>
        </div>
    );
}