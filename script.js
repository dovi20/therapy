// Improved form handling with on-page message
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send the data to a server here.
    // For this example, we just show the success message.
    
    formStatus.textContent = 'תודה על פנייתך! אחזור אליך בהקדם.';
    formStatus.style.display = 'block';
    contactForm.reset();

    // Optional: Hide the message after a few seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000); // Hide after 5 seconds
});
