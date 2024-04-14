    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const emailAddress = document.getElementById('emailAddress').value;
        const subject = document.getElementById('subject').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const message = document.getElementById('message').value;
        const legalAdvice = document.getElementById('legalAdvice').checked;

        // Verify reCAPTCHA
        grecaptcha.ready(function() {
            grecaptcha.execute('your_site_key_here', { action: 'submit' }).then(function(token) {
                // Send email via Gmail API
                // Implement AJAX request to send email
            });
        });
    });