import React from "react";
import styled from 'styled-components';

const TitleComponentStyle = styled.div`
text-align:center;
h1 {
 font-family: 'Arial';
 font-size: 6rem;
 margin-top: 0.5rem;
}
`;

export default function TitleComponent({
  heading = 'This is heading',
}) {
  return (
    <TitleComponentStyle>
      <h1>{heading}</h1>
    </TitleComponentStyle>
  );
}