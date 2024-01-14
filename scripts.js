document.addEventListener('DOMContentLoaded', function() {
    var line2 = document.getElementById('line2');
    var input = document.getElementById('input');
    var enterButton = document.getElementById('enterButton');
  
    setTimeout(function() {
      line2.style.display = 'none';
      input.style.display = 'block';
    }, 10000); // Adjust this value to match the duration of your CSS animations
  
    input.addEventListener('input', function(e) {
      if (input.value.toLowerCase() === 'yes') {
        enterButton.style.display = 'block';
      } else {
        enterButton.style.display = 'none';
      }
    });
  
    enterButton.addEventListener('click', function() {
      window.location.href = 'landing.html';
    });
  });