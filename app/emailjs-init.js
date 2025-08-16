import emailjs from 'emailjs-com';

export function sendEmail(e, onSuccess, onError) {
  e.preventDefault();
  emailjs.sendForm(
    'service_ozea06x', // provided EmailJS service ID
    'template_wulqhlr', // provided EmailJS template ID
    e.target,
    'XMOnwjyzQDoRVRYl3' // provided EmailJS public key
  ).then(
    (result) => {
      if (onSuccess) onSuccess();
    },
    (error) => {
      if (onError) onError();
    }
  );
}
