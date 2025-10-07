/*
const canvas = document.getElementById("rippleCanvas");
const ctx = canvas.getContext("2d");

let ripples = [{x: window.innerWidth/2, y: window.innerHeight/2, r: 0}];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ripples.forEach(r => {
    r.r += 2;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, Math.PI);
    ctx.strokeStyle = "rgba(202, 58, 26, 0.5)";
    ctx.stroke();

    // Example "deflection": if ripple overlaps an element, distort radius
    document.querySelectorAll(".obstacle").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (r.x > rect.left && r.x < rect.right && r.y > rect.top && r.y < rect.bottom) {
        r.r -= 5; // crude "bounce back"
      }
    });
  });
  requestAnimationFrame(animate);
}

document.querySelectorAll(".obstacle").forEach(el => {
  const rect = el.getBoundingClientRect();

  // Convert obstacle rect into canvas coordinates
  const obstacle = {
    left: rect.left - canvasRect.left,
    right: rect.right - canvasRect.left,
    top: rect.top - canvasRect.top,
    bottom: rect.bottom - canvasRect.top
  };

  // Check if ripple center is inside obstacle
  if (r.x > obstacle.left && r.x < obstacle.right &&
      r.y > obstacle.top && r.y < obstacle.bottom) {
    r.r -= 5; // crude "bounce"
  }
});

function circleRectCollision(cx, cy, cr, rect) {
  // Find closest point on rect to circle center
  const closestX = Math.max(rect.left, Math.min(cx, rect.right));
  const closestY = Math.max(rect.top, Math.min(cy, rect.bottom));

  // Distance from circle center to closest point
  const dx = cx - closestX;
  const dy = cy - closestY;

  return (dx * dx + dy * dy) <= (cr * cr);
}
animate();
*/
// script.js
/*
document.querySelector('.ripple-btn').addEventListener('click', function (e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple');
    button.appendChild(ripple);

    // Remove the ripple after animation
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
*/

const btn = document.querySelector(".btn");

// Listen for click event
btn.onclick = function (e) {

    // Create span element
    let ripple = document.createElement("span");

    // Add ripple class to span
    ripple.classList.add("ripple");

    // Add span to the button
    this.appendChild(ripple);

    // Get position of X
    let x = e.clientX - e.currentTarget.offsetLeft;

    // Get position of Y
    let y = e.clientY - e.currentTarget.offsetTop;

    // Position the span element
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Remove span after 0.3s
    setTimeout(() => {
        ripple.remove();
    }, 300);

};