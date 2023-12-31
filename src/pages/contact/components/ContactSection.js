import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import './../../../assets/css/contact/FormStyles.css'
import ContactInfoItem from './ContactInfoItem';
import './../../../assets/css/contact/ContactSection.css';
import TitleComponent from '../../../components/TitleComponent';
import './../../../assets/css/container.css'
import ContactForm from './ContactForm';


export function ContactSection() {
    return (
        <div className="ContactSectionStyle">
            <div className="container">
                <TitleComponent heading="Contact PetVoyage"/>
                <div className="contactSection">
                    <div className="left">
                        <ContactInfoItem icon={<MdLocalPhone />} text="0744444444"/> 
                        <ContactInfoItem icon={<MdEmail/>} text="petvoyage@gmail.com"/>
                        <ContactInfoItem text="Sector 1, Bucuresti, Romania"/> 
                    </div>
                    <div className="right">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;