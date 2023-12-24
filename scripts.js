document.addEventListener('DOMContentLoaded', function() {
    var line2 = document.getElementById('line2');
    var input = document.getElementById('input');
  
    setTimeout(function() {
      line2.style.display = 'none';
      input.style.display = 'block';
    }, 10000); // Adjust this value to match the duration of your CSS animations
  
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && input.value.toLowerCase() === 'yes') {
        window.location.href = 'landing.html'; 
      }
    });
  });