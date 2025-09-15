document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
  document.getElementById("formMessage").style.color = "#ff1493";
  this.reset();
});