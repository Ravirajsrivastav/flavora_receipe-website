document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("floating-widget");
  const popup = document.getElementById("popup-container");
  const closeBtn = document.getElementById("close-popup");

  // Toggle popup on click
  widget.addEventListener("click", () => {
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
