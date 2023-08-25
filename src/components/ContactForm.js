import React, {useState} from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
width: 100%;
.form-group{
    widtg: 100%;
    margin-bottom: 2rem;
}
label {
    font-size: 1.8rem;
}
input,
textarea{
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--dark);
    outline: none;
    border: none;
    border-radius: 8 px;
    margin-top: 1rem;
}
textarea {
    min-height: 250px;
    resize: vertical;
}
button[type="submit"]{
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4 rem;
    border-radius: 8px;
    cursor: pointer;
}
`;

export default function ContactForm() {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');

  return (
    <div>
      <FormStyles>
        <div className="form-group">
            <label htmlFor="name">Your name<input type="text" id="name" name="name" value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="email">Your email<input type="text" id="email" email="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="name">Your message<textarea type="text" id="message" message="message" value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            </label>
        </div>
        <button type="submit">Trimite</button>
      </FormStyles>
    </div>
  )
}
