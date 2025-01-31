function toggleIcon() {
  let buttonIcon = document.querySelector("#fullscreen-btn i");
  let iframe = document.getElementById("game-iframe");
  let ModMENU = document.getElementById("Mod-Menu");
  let Crosshair = document.getElementById("crosshair");

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

      Crosshair.style.top = '50.3%';
      Crosshair.style.left = '50%';
      Crosshair.style.transform = 'translate(-50%, -50.3%)';
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

      Crosshair.style.top = '50.35%';
      Crosshair.style.left = '53%';
      Crosshair.style.transform = 'translate(-53%, -50.35%)';
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

let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;
let running = false;
let fpsCounter = document.getElementById("fpsCounter");
let fpsToggle = document.getElementById("fpsToggle");

function updateFPS() {
    if (!running) return;

    const now = performance.now();
    frameCount++;

    if (now - lastFrameTime >= 1000) { 
        fps = frameCount;
        frameCount = 0;
        lastFrameTime = now;
        fpsCounter.textContent = `FPS: ${fps}`;
    }
    requestAnimationFrame(updateFPS);
}

// Toggle FPS Counter on Checkbox Change
fpsToggle.addEventListener("change", function() {
    if (fpsToggle.checked) {
        running = true;
        fpsCounter.style.display = "block"; 
        lastFrameTime = performance.now(); // Reset timer
        updateFPS(); // Start FPS counter
    } else {
        running = false;
        fpsCounter.style.display = "none";
    }
});



document.addEventListener("DOMContentLoaded", function () {
  let running = false;
  let pingCounter = document.getElementById("pingCounter");
  let pingToggle = document.getElementById("pingToggle");

  function measurePing() {
      if (!running) return;

      const startTime = performance.now();
      let ws = new WebSocket("wss://echo.websocket.org"); // Public WebSocket echo server

      ws.onopen = () => {
          ws.send("ping"); // Send a message
      };

      ws.onmessage = () => {
          const ping = Math.round(performance.now() - startTime);
          pingCounter.textContent = `Ping: ${ping}ms`;
          ws.close();
      };

      ws.onerror = () => {
          pingCounter.textContent = "Ping: Error";
      };

      setTimeout(measurePing, 1000); // Repeat every second
  }

  // Toggle Ping Counter on Checkbox Change
  pingToggle.addEventListener("change", function () {
      if (pingToggle.checked) {
          running = true;
          pingCounter.style.display = "block";
          measurePing();
      } else {
          running = false;
          pingCounter.style.display = "none";
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let crosshairToggle = document.getElementById("crosshairToggle");
  let crosshair = document.getElementById("crosshair");

  crosshairToggle.addEventListener("change", function () {
      if (crosshairToggle.checked) {
          crosshair.style.display = "block"; // Show crosshair
      } else {
          crosshair.style.display = "none"; // Hide crosshair
      }
  });
});

