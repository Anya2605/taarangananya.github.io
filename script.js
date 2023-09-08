// Get all the registration forms on the page
const registrationForms = document.querySelectorAll('form');

// Add an event listener for form submission
registrationForms.forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert('Thank you for registering!'); // Display an alert (customize this)
    });
});
