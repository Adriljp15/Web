// Function to check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (isElementInViewport(box)) {
            box.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);