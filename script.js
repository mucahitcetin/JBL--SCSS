function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-button');
    var menu = document.querySelector('.menu');
  
    toggleButton.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });

    window.addEventListener("beforeunload", function() {
        // Menüyü kapalı olarak ayarla
        menu.classList.remove("open");
      });
  });