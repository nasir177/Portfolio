document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop the page from reloading

            // 1. Get the submit button to show loading state
            const submitBtn = form.querySelector("button[type='submit']");
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            // 2. Collect the form data
            const formData = new FormData(form);

            // 3. Send data to FormSubmit.co (No backend required)
            fetch("https://formsubmit.co/ajax/nasirhussain11118@gmail.com", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Success!
                alert("Thank you! Your message has been sent successfully.");
                form.reset();
            })
            .catch(error => {
                // Error
                alert("Oops! Something went wrong. Please try again or email me directly.");
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button state
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});