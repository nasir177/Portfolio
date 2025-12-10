// Simple JS for form animation or feedback (optional)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thanks for contacting Nasir! Your message was sent.");
      form.reset();
    });
  }
});
