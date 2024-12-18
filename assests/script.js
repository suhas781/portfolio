// JavaScript to handle the form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const form = event.target;
  
    // Use EmailJS to send the form data
    emailjs.sendForm('service_t39n5d8', 'template_wdft8ow', form, 'xHKIIUR6ApRr2PhSO')
        .then(function (response) {
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').textContent = 'Thank you! Your message has been sent.';
            document.getElementById('formResponse').style.color = 'green';
            form.reset(); // Clear form fields
        }, function (error) {
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').textContent = 'Oops! Something went wrong. Please try again.';
            document.getElementById('formResponse').style.color = 'red';
            console.error('Email sending error:', error);
        });
  });
  