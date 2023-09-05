import React, {useState} from 'react';
import './../../../assets/css/contact/FormStyles.css'
import Alert from './Alert.js';

export function ContactForm() {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');

  return (
    <div className="formStyle">
        <div className="form-group">
            <label htmlFor="name">Name<input type="text" id="name" name="name" value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email<input type="text" id="email" email="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="name">Message<textarea type="text" id="message" message="message" value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            </label>
        </div>
        <Alert></Alert>
    </div>
  )
}

export default ContactForm;