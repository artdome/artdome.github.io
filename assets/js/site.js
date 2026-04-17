function openModal(type) {
    document.getElementById(type + '-modal').style.display = 'flex';
}

function closeModal(type) {
    document.getElementById(type + '-modal').style.display = 'none';
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
