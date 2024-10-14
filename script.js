//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Get the modal
var modal = document.getElementById('modal-survival');

// Get the open modal link
var openModalLinks = document.querySelectorAll('.open-modal');

// Get the close button (X)
var closeModal = document.getElementsByClassName("close")[0];

// When the user clicks the link or image, open the modal
openModalLinks.forEach(link => {
    link.onclick = function() {
        modal.style.display = "flex";
    };
});

// When the user clicks on X, close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
