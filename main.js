document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for reaching out, ${name}! We'll get back to you soon.`);
    
    // Clear form fields
    document.getElementById('contact-form').reset();
});

  