/////////////////////////
// root scripts
////////////////////////

// contact form success message
const params = new URLSearchParams(window.location.search);
if (params.get('success') === 'true') {
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-direction').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// handle hamburger toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
});


// render current year in footer copyright 
const year = new Date().getFullYear();
let copyright = document.getElementById('copyright');
copyright.textContent = copyright.textContent.replace('YEAR', year);