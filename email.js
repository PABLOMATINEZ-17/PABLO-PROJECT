(function () {
  // https://dashboard.emailjs.com/admin/account
  const YOUR_PUBLIC_KEY = "-hl9BuPQEsPzmeneu";
  emailjs.init({
    publicKey: YOUR_PUBLIC_KEY,
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      const service_id = "service_5ma045p";
      const template_id = "template_4gdndfk";
      emailjs.sendForm(service_id, template_id, this).then(
        () => {
          alert("Your message has been sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log("FAILED...", error);
        }
      );
    });
};
