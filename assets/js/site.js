function setActiveNav(button) {
    document.querySelectorAll('.nav-btn, .nav-link').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function openModal(type) {
    document.getElementById(type + '-modal').style.display = 'flex';
    const contactBtn = document.querySelector('.nav-btn[onclick*="Contact"]') || 
                       [...document.querySelectorAll('.nav-btn')].find(btn => btn.textContent.includes('Contact'));
    if (contactBtn) setActiveNav(contactBtn);
}

function closeModal(type) {
    document.getElementById(type + '-modal').style.display = 'none';
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const appsBtn = document.querySelector('.nav-btn[onclick*="scrollToSection"]');
        if (appsBtn) setActiveNav(appsBtn);
    } else {
        // If target doesn't exist on this page, navigate to index.html
        window.location.href = '../index.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const appsBtn = document.querySelector('.nav-btn[onclick*="scrollToSection"]');
    if (appsBtn && document.getElementById('apps')) {
        appsBtn.classList.add('active');
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
