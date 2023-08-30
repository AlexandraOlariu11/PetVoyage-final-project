import React from 'react';
import { MdPlace } from 'react-icons/md';
import './../../../assets/css/contact/ItemStyles.css'
import PText from '../../../components/PText';


export function ContactInfoItem({
    icon = <MdPlace />,
    text= 'this is an info',
}) {
  return (
    <div className="ItemStyles">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </div>
  );
};

export default ContactInfoItem;


