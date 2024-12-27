// Toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    }
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Generic function to open and close modals by id
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show'); // Use the 'show' class to display the modal
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove the 'show' class to hide the modal
}

// Open modal for "Survival" project
document.querySelectorAll('.open-modal').forEach(link => {
    link.onclick = function () {
        openModal('modal-survival');
    };
});

// Open modal for "Llama" project
document.querySelectorAll('.open-llama-modal').forEach(link => {
    link.onclick = function () {
        openModal('modal-llama');
    };
});


// Open modal for "ARIMA" project
document.querySelectorAll('.open-ARIMA-modal').forEach(link => {
    link.onclick = function () {
        openModal('modal-ARIMA');
    };
});

// Close modals when clicking outside
window.onclick = function (event) {
    const survivalModal = document.getElementById('modal-survival');
    const llamaModal = document.getElementById('modal-llama');

    if (event.target === survivalModal) {
        closeModal('modal-survival');
    } else if (event.target === llamaModal) {
        closeModal('modal-llama');
    }
};

// Open ARIMA audio modal
    function openAudioModal() {
        document.getElementById("audioModal").style.display = "block";
    }
    
    function closeAudioModal() {
        document.getElementById("audioModal").style.display = "none";
    }

    // Cierra el modal si el usuario hace clic fuera de la ventana
    window.onclick = function(event) {
        if (event.target == document.getElementById("audioModal")) {
            closeAudioModal();
        }
    }

// Close button for "Survival" modal
document.querySelector('#modal-survival .close').onclick = function () {
    closeModal('modal-survival');
};

// Close button for "Llama" modal
document.querySelector('#modal-llama .close').onclick = function () {
    closeModal('modal-llama');
};

// Close button for "ARIMA" modal
document.querySelector('#modal-ARIMA .close').onclick = function () {
    closeModal('modal-ARIMA');
};
