function myanim() {
  let element = document.getElementsByClassName("name")[0]; // Access the first element
  if (element) {
      element.style.animation = "none"; // Reset animation
      element.offsetHeight; // Force reflow
      element.style.animation = "animator 6s"; // Restart animation
  }
}
