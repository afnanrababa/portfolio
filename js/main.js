

  document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm(
        'service_dyhxdv7',   
        'template_xjyvno2',  // ← your Template ID
        this             // the form element
      )
      .then(function() {
        alert('Message sent successfully!');
        event.target.reset();
      }, function(error) {
        console.error('EmailJS Error:', error);
        alert('Oops… something went wrong. Please try again later.');
      });
    });
