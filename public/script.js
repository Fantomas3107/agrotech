window.onload = function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
      document.getElementById('content').style.filter = 'blur(0px)';
    }, 1000)
  }

  function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
          document.getElementById("dropbtn").classList.toggle("flipped");
}
