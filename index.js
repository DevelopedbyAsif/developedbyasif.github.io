
function toggleHeaderClass() {
    // Check if the screen width is greater than 1024px
    if (window.innerWidth > 1024) {
        const header = document.getElementById('header');
        const logo = document.getElementById('logo');
        const isScrolled = window.scrollY > header.offsetHeight - 10;

        // Toggle classes based on scroll position
        header.classList.toggle('sticky-header', isScrolled);
        header.classList.toggle('active-header', !isScrolled);
        header.classList.toggle('py-2', isScrolled);
        header.classList.toggle('py-4', !isScrolled);

        // Change logo color based on scroll position
        logo.style.fill = isScrolled ? 'black' : 'white';

        // Adjust margin-top of Hero section based on scroll position
        document.getElementById('Hero').style.marginTop = isScrolled ? -header.offsetHeight + 'px' : '0px';
    } else {
        // Optional: Reset or remove specific classes or styles if screen width <= 1024px
        const header = document.getElementById('header');
        header.classList.remove('sticky-header', 'active-header', 'py-2', 'py-4');
        document.getElementById('Hero').style.marginTop = '0px';
        header.classList.add('active-header', 'py-4')
        logo.style.fill = 'white' // Adjust if needed for smaller screens
    }
}

// Listen for scroll events
window.addEventListener('scroll', toggleHeaderClass);

// Call the function initially to set the correct class on page load
toggleHeaderClass();

// Optional: Also call the function on window resize to handle changes in screen size
window.addEventListener('resize', toggleHeaderClass);

function width(){
    heading = document.getElementById('hero-h').offsetWidth

   document.getElementById('hero-p').style.width = heading  +'px';



}
window.addEventListener('resize', width);
width();


document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});


const line = document.querySelector('.line');


// Function to update line height based on scroll position
function updateLineHeight() {

// Calculate the height based on scroll position
const scrollY = window.scrollY;

  const lineHeight = Math.min(scrollY-690 );

// Update the height of the line
line.style.height = `${lineHeight}px`;}

// Add scroll event listener
window.addEventListener('scroll', updateLineHeight);

// Initial update
updateLineHeight();


menu = document.getElementById('menu')
var isopen = false
button = document.getElementById('button');
function myFunction(x) {
   var isopened = isopen;
  x.classList.toggle("change");
menu.classList.toggle("animate-menu");
menu.classList.toggle("mob-menu");
button.classList.toggle("none")
isopen = !isopened;

}

