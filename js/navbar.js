document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname.replace(/\/$/, '');  // Remove trailing slash if present
    const navLinks = document.querySelectorAll('nav a'); // Get all the navigation links

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, '');  // Remove trailing slash from link path

        // Check if the link's path matches the current location exactly
        if (linkPath === currentLocation) {
            link.classList.add('active');  // Add the 'active' class if it matches
        } else {
            link.classList.remove('active');  // Remove the 'active' class if it doesn't match
        }
    });
});


// GSAP scroll animation for navbar hide/show
let lastScrollTop = 0; // Keeps track of the last scroll position
const navbarContent = document.querySelector('.navbar-content'); // Select the navbar content

// GSAP to animate the navbar on scroll
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the navbar
    if (currentScroll > lastScrollTop) {
        gsap.to(navbarContent, {
            y: -100, // Moves the navbar content up by 100px (adjust based on your navbar height)
            duration: 0.3, // Duration of the animation (0.3 seconds)
            ease: 'power2.out' // Easing function for smoothness
        });
    } else {
        // If scrolling up, show the navbar
        gsap.to(navbarContent, {
            y: 0, // Resets the navbar content to its original position
            duration: 0.3, // Duration of the animation
            ease: 'power2.out' // Easing function for smoothness
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});