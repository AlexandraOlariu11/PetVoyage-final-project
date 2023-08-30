import React from 'react'
import Swal from 'sweetalert2';
import './../../../assets/css/contact/FormStyles.css'


export function Alert() {
    const AlertMessage = () =>{
        Swal.fire('Thank you',
        'Your message has been sent',
        'success')
    }
  return (
    <div>
      <button className='button' type="submit" onClick={AlertMessage}>Send</button>
    </div>
  );
}

export default Alert;
