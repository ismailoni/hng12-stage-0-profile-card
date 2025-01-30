// Function to update the current UTC time dynamically
function updateTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    timeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
  }
  
  // Initialize the time display on page load
  document.addEventListener('DOMContentLoaded', function () {
    updateTime();
  });
  