let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

//////


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Selects the first <form> on the page
    const notification = document.getElementById("notification");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
       console.log("Form submitted!");

      // Show notification
      notification.style.display = "block";

      // Hide after 3 seconds
      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);

      // Clear the form
      form.reset();
    });
  });




