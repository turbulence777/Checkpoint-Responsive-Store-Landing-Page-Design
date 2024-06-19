document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    var subscriptionForm = document.getElementById('subscriptionForm');
    subscriptionForm.addEventListener('submit', function(event) {
        if (!subscriptionForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        subscriptionForm.classList.add('was-validated');
    }, false);
});
