// JavaScript for no page reload once website page is loaded in client's browser

// Get all links with the class "nav-link"
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each link and add an event listener to prevent page reload on click
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for image gallery modal

// Get the modal element
const modal = document.getElementById("gallery-modal");

// Get the image and insert it inside the modal
const images = document.querySelectorAll(".gallery-images img");
const modalImg = document.getElementById("modal-image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = image.src;
  });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// JavaScript for form submission and success message

// Get the form element
const form = document.getElementById("contact-form");

// Add an event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Open the request
  xhr.open("POST", "process-form.php", true);

  // Set the request header
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Handle the response
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Clear the form
      form.reset();

      // Display success message
      const successMessage = document.getElementById("success-message");
      successMessage.innerText = "Message sent successfully.";
      successMessage.style.display = "block";
    } else {
      console.log("Request failed. Returned status of " + xhr.status);
    }
  };

  // Send the request
  xhr.send("name=" + name + "&email=" + email + "&message=" + message);
});
