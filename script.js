// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    mobileMenuBtn?.querySelector('i').classList.add('fa-bars');
    mobileMenuBtn?.querySelector('i').classList.remove('fa-times');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      navLink?.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn?.classList.add('visible');
  } else {
    scrollTopBtn?.classList.remove('visible');
  }
});

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here (e.g., Formspree, EmailJS, or backend API)
  alert('Thank you! Your message has been sent. I will get back to you soon.');
  contactForm.reset();
});
