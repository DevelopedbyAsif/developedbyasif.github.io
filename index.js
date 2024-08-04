
// Function to toggle class based on scroll position
function toggleHeaderClass() {
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const isScrolled = window.scrollY > header.offsetHeight -10;

header.classList.toggle('sticky-header', isScrolled);
header.classList.toggle('active-header', !isScrolled);
header.classList.toggle('py-2', isScrolled);
header.classList.toggle('py-4', !isScrolled);
logo.style.fill = isScrolled ? 'black' : 'white';
document.getElementById('Hero').style.marginTop = isScrolled ? -header.offsetHeight+'px' : '0px';
// This is constant, no need to toggle
}
// Listen for scroll events
window.addEventListener('scroll', toggleHeaderClass);
// Call the function initially to set the correct class on page load
toggleHeaderClass();
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
var isexecuted = false

// Function to update line height based on scroll position
function updateLineHeight() {
    if(!isexecuted){;
// Calculate the height based on scroll position
const scrollY = window.scrollY;


// Calculate the height of the line (gro633 as you scroll)
const lineHeight = Math.min(scrollY -690 );

if(scrollY>1390){isexecuted = true;

}

// Update the height of the line
line.style.height = `${lineHeight}px`;}
}

// Add scroll event listener
window.addEventListener('scroll', updateLineHeight);

// Initial update
updateLineHeight();

