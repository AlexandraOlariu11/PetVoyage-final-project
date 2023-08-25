import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
import PText from './PText';

const ItemStyles = styled.div`
padding: 2rem;
background-color: var(--gray-1);
display: flex;
align-items: center;
gap: 2rem;
border-radius: 8px;
margin-bottom: 2rem;
.icon{
    color: var(--white);
    background-color: var (--gray-1);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
svg{
    width: 3.5rem;
}
`;



export default function ContactInfoItem({
    icon = <MdPlace />,
    text= 'this is an info',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
    </div>
    </ItemStyles>
  );
}


//NU INTELEG DE CE NU FUNCTIONEAZA VARIABILELE - rand 8