import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_Nq2YZxdHU0r3U8gBZIkIP");

export const sendEmail = e => { 
    e.preventDefault()

    emailjs
    .sendForm('service_9mw9ofa','template_cotro3m', e.target,'user_Nq2YZxdHU0r3U8gBZIkIP' )
    .then(
      result => {
        window.location.reload();
      },
      error => {
        alert("please try again")
      }
    )
}