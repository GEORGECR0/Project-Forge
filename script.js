function toggleIcon() {
  let buttonIcon = document.querySelector("#fullscreen-btn i");
  let iframe = document.getElementById("game-iframe");
  let ModMENU = document.getElementById("Mod-Menu");

  // Toggle between fullscreen and exit fullscreen icons
  if (buttonIcon.classList.contains("ri-fullscreen-line")) {
      buttonIcon.classList.remove("ri-fullscreen-line");
      buttonIcon.classList.add("ri-fullscreen-exit-line");

      // Change iframe size to full screen
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.bottom = "0px";
      iframe.style.right = "0px";
      iframe.style.borderRadius = "0px";

      ModMENU.style.width = "100%";
      ModMENU.style.height = "100%";
      ModMENU.style.bottom = "0px";
      ModMENU.style.right = "0px";
      ModMENU.style.borderRadius = "0px";
  } else {
      buttonIcon.classList.remove("ri-fullscreen-exit-line");
      buttonIcon.classList.add("ri-fullscreen-line");

      // Return iframe size to normal
      iframe.style.width = "92%";
      iframe.style.height = "96%";
      iframe.style.bottom = "20px";
      iframe.style.right = "20px";
      iframe.style.borderRadius = "20px";

      ModMENU.style.width = "92%";
      ModMENU.style.height = "96%";
      ModMENU.style.bottom = "20px";
      ModMENU.style.right = "20px";
      ModMENU.style.borderRadius = "20px";
  }
}

function togglemenu() {
  let buttonIcon = document.querySelector("#modmenu-btn i");
  let ModMENU = document.getElementById("Mod-Menu");

  // Toggle between gamepad icons and show/hide the DIY div
  if (buttonIcon.classList.contains("ri-gamepad-line")) {
      buttonIcon.classList.remove("ri-gamepad-line");
      buttonIcon.classList.add("ri-close-line");

      // Show the DIY div with a red transparent background
      ModMENU.style.display = "flex";
      ModMENU.style.pointerEvents = "auto"; // Disable click-through
  } else {
      buttonIcon.classList.remove("ri-close-line");
      buttonIcon.classList.add("ri-gamepad-line");

      // Hide the DIY div
      ModMENU.style.display = "none";
      ModMENU.style.pointerEvents = "none"; // Enable click-through
  }
}


// Draggable functionality
let dragContainer = document.querySelector('.top-right-container');
let isDragging = false;
let offsetX, offsetY;

dragContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - dragContainer.getBoundingClientRect().left;
  offsetY = e.clientY - dragContainer.getBoundingClientRect().top;
  
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDragging);
});

function drag(e) {
  if (isDragging) {
    dragContainer.style.left = `${e.clientX - offsetX}px`;
    dragContainer.style.top = `${e.clientY - offsetY}px`;
  }
}

function stopDragging() {
  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDragging);
}