import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/Button.css';
import './../assets/css/aboutUs/DespreNoi.css';

export default function Button({
    btnText = 'test',
    btnLink = 'test',
    outline = false,
  }) {
    return (
      <div className="ButtonStyle, button-wrapper" outline={outline}>
        <Link className="Button" to={btnLink}>
          {btnText}
        </Link>
      </div>
    );
  }