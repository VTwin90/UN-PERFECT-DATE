function sendMail(contactForm) {
    emailjs.send('service_gmail', 'template_a9qjkmq', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'message': contactForm.message.value
    })
    .then(
        function(response) {
             alert("YOUR MESSAGE HAS BEEN SUCCESSFULLY SENT!");
            console.log('SUCCESS', response);
        },
        function(error) {
            alert("YOUR MESSAGE DID NOT GET SENT");
            console.log('FAILED', error);
        }
    );
    return false;  // To block from loading a new page
}
