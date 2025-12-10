document.addEventListener('DOMContentLoaded', () => {
    // Subtle animation on the greeting when the page loads
    const greeting = document.querySelector('.greeting-large');
    if (greeting) {
        // Initial setup before animation starts
        greeting.style.opacity = 0;
        greeting.style.transform = 'translateY(20px)';
        
        // Start animation after a short delay
        setTimeout(() => {
            greeting.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            greeting.style.opacity = 1;
            greeting.style.transform = 'translateY(0)';
        }, 100);
    }

    // Since all navigation links are now visible, no complex JS needed for a mobile menu.
    
    // Optional: Add logging to confirm resume link behavior
    const resumeLink = document.querySelector('a[href="resume.pdf"]');
    if (resumeLink) {
        resumeLink.addEventListener('click', () => {
            console.log("Navigating to Resume PDF in new tab...");
        });
    }
});