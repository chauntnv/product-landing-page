const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Active link + close menu on click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.querySelectorAll("a").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// feature item loading
const items = document.querySelectorAll(".feature-item");
items.forEach((el, i) => {
  setTimeout(() => el.classList.add("visible"), 150 + i * 150);
});

// contact js
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.className = "form-message error";
    return;
  }

  msg.textContent = "Your message has been sent successfully!";
  msg.className = "form-message";
  form.reset();
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.querySelector('.hamburger').classList.remove('open');
  });
});