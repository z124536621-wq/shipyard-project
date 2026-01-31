document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shipForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            shipTitle: document.getElementById('shipTitle').value,
            description: document.getElementById('description').value,
            proofUrl: document.getElementById('proofUrl').value,
            proofType: document.getElementById('proofType').value
        };

        // Log the submission (in a real app, you'd send this to a server)
        console.log('Ship submitted:', formData);

        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(function() {
            // Hide form and show success message
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Optionally reset form
            form.reset();

            // After 3 seconds, show the form again
            setTimeout(function() {
                successMessage.classList.add('hidden');
                form.classList.remove('hidden');
            }, 3000);
        }, 1000);
    });

    // Add input animations
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});
