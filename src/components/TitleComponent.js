import React from "react";
import  './../assets/css/contact/TitleComponent.css'

export default function TitleComponent({
  heading = 'This is heading',
}) {
  return (
    <div class="TitleComponentStyle">
      <h1>{heading}</h1>
    </div>
  );
}