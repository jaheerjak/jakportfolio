// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  // toggle icon (hamburger <-> x)
  const icon = document.getElementById('menuIcon');
  if (mobileMenu.classList.contains('active')) {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
  } else {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>';
  }
});

// Contact form: opens mailto with prefilled content
function contactSubmit(e) {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);
  const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\n' + message);
  window.location.href = `mailto:jaheerjak@gmail.com?subject=${subject}&body=${body}`;
}

// current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

