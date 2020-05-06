/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbarToggle() {
    const x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }