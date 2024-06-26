function showAlert() {
  alert("Thank you for your interest! More information coming soon.");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent! We will get back to you soon.");
    this.reset();
  });
