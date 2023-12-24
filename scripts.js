window.onload = function() {
    setTimeout(function() {
      var textLine1 = document.querySelector('.line-1');
      var textLine2 = document.querySelector('.line-2');
  
      // Move the first line up by 15px
      var currentBottom = parseInt(window.getComputedStyle(textLine1).bottom, 10);
      textLine1.style.bottom = (currentBottom + 15) + 'px';
  
      // Show the second line
      textLine2.style.opacity = '1';
    }, 5000);
  };