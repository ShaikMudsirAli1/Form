document
  .getElementById("contactFrom")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Validate form fields
    if (!name || !email || !subject || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    // Prepare data for AJAX submission
    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Submit form using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit-form.js", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Form submitted successfully
          alert(
            "Thank you for contacting us! We will get back to you shortly."
          );
          document.getElementById("contactForm").reset();
        } else {
          // Error submitting the form
          alert("Oops! Something went wrong. Please try again later.");
        }
      }
    };

    xhr.send(JSON.stringify(formData));
  });
