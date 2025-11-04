// Traffic Chart
const trafficCtx = document.getElementById("trafficChart");
new Chart(trafficCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "New Visitor",
        data: [5, 8, 6, 10, 7, 12, 9, 11, 10, 8],
        borderColor: "#33b2ff",
        fill: true,
        backgroundColor: "rgba(51,178,255,0.2)",
        tension: 0.4,
      },
      {
        label: "Old Visitor",
        data: [3, 5, 4, 6, 5, 8, 6, 7, 5, 6],
        borderColor: "#ffffff",
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      },
    ],
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
    },
  },
});

// Weekly Sales Chart
const salesCtx = document.getElementById("salesChart");
new Chart(salesCtx, {
  type: "doughnut",
  data: {
    labels: ["Direct", "Affiliate", "Email"],
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ["#33b2ff", "#00cfe8", "#7367f0"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
  },
});

// Notification toggle
const notificationIcon = document.querySelector(".notification-container");
const notificationDropdown = document.getElementById("notificationDropdown");

notificationIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  notificationDropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
  notificationDropdown.classList.remove("active");
});

// Remove notification
document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});



