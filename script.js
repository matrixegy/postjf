const countdownlinksMessages = ["انتظر... سيتم عرض الروابط بعد", "Links will appear soon..."];
  let messageIndex = 0;

  // Function to start countdownlinks with circle animation
  function startcountdownlinks() {
      let timeLeft = 20; // countdownlinks time in seconds
      const timerDisplay = document.getElementById("timer");
      const countdownlinksSection = document.getElementById("countdownlinks");
      const timerCircle = document.getElementById("timer-circle");
      const countdownlinksMessage = document.getElementById("countdownlinks-message"); // To change the message

      // Display countdownlinks section
      countdownlinksSection.style.display = "block";
      
      // Set circle size and start animation
      timerCircle.style.transition = "transform 0.3s ease-in-out";

      // Update the timer every second
      const countdownlinksInterval = setInterval(function() {
          timerDisplay.textContent = timeLeft;

          if (timeLeft === 10) {
              if (messageIndex === 0) {
                  countdownlinksMessage.textContent = countdownlinksMessages[1];
                  messageIndex = 1;
              }
          }

          // Animate the circle as countdownlinks progresses
          let rotation = (20 - timeLeft) * 18; // Rotate based on remaining time
          timerCircle.style.transform = `rotate(${rotation}deg)`;

          timeLeft--;

          if (timeLeft < 0) {
              clearInterval(countdownlinksInterval);
              // After countdownlinks ends, show download links
              showDownloadLinks();
          }
      }, 1000);

      // If the countdownlinks doesn't work or there's an error, show download links after 20 seconds
      setTimeout(function() {
          if (timeLeft >= 0) { // If countdownlinks is still running, we assume there's an issue
              showDownloadLinks();
          }
      }, 20000); // 20 seconds timeout
  }

  // Function to show download links
  function showDownloadLinks() {
      // Show the download links section
      document.getElementById("download-links").style.display = "block";
      // Hide countdownlinks section
      document.getElementById("countdownlinks").style.display = "none";
  }

  function hideDownloadLinks() {
      setTimeout(function() {
          document.getElementById("download-links").style.display = "none";
          document.getElementById("countdownlinks").style.display = "none";
          document.getElementById("show-links-btn").style.display = "inline-block"; // Show the button
      }, 300000); // Hide after 30 seconds
  }

  // Call the hide function when showing the download links
  function showDownloadLinks() {
      document.getElementById("download-links").style.display = "block";
      document.getElementById("countdownlinks").style.display = "none";
      hideDownloadLinks(); // Call hide function after showing the links
  }

  // Event listener for the button to show download links and start countdownlinks
  document.getElementById("show-links-btn").addEventListener("click", function() {
      // Hide the button after click
      this.style.backgroundColor = "#e64a19"; // Darker shade when clicked
      this.style.display = "none";
      // Start countdownlinks
      startcountdownlinks();
  });