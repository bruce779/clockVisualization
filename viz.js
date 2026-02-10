// 1. Create a global variable to track the timer
// This prevents multiple clocks running on top of each other when data refreshes
var timer = null;

function drawViz(data) {
  // 2. Get or Create the container
  // We use 'clock-display' to match your style.css
  let container = document.getElementById('clock-display');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'clock-display';
    document.body.appendChild(container);
  }

  // 3. Define the update function
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    container.innerText = time;
  }

  // 4. Reset the Timer
  if (timer) clearInterval(timer); // Stop old timer
  updateClock(); // Run once immediately
  timer = setInterval(updateClock, 1000); // Start new timer
}

// 5. Subscribe to Data (REQUIRED)
// This tells Looker Studio to run 'drawViz' when the component loads
dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
