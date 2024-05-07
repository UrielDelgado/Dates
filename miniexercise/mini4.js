// Function to update the current time
function updateTime() {
    // Create a new Date object
    let now = new Date();

    // Format the time as a string in a human-readable format
    let currentTime = now.toLocaleTimeString();

    // Update the document element with the new time
    document.getElementById('current-time').innerText = currentTime;

    // Call updateTime again after 1000 milliseconds (1 second)
    setTimeout(updateTime, 1000);
}

// Set up the initial call to updateTime when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
});