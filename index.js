const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.querySelectorAll("a").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.className = "form-message error";
    return;
  }

  msg.textContent = "Your message has been sent successfully!";
  msg.className = "form-message";
  form.reset();
});