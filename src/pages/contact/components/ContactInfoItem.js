import React from 'react';
import { MdPlace } from 'react-icons/md';
import './../../../assets/css/contact/ItemStyles.css'


export function ContactInfoItem({
    icon = <MdPlace />,
    text= 'this is contact info',
}) {
  return (
    <div className="ItemStyles">
      <div className="icon">{icon}</div>
      <div className="info">
        <div>{text}</div>
      </div>
    </div>
  );
};

export default ContactInfoItem;


