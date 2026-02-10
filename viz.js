const clockEl = document.getElementById("clock");

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clockEl.textContent = time;
}

// Initial draw
updateClock();

// Update every second
setInterval(updateClock, 1000);

function drawViz(data) {
  // 1. Create or select the container
  let container = document.getElementById('clock-display');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'clock-display'; // MATCHES CSS ID
    document.body.appendChild(container);
  }

  // 2. Update time (Simplified example)
  container.innerText = new Date().toLocaleTimeString();
}

