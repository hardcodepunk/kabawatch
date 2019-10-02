var menuButtons = document.getElementsByClassName('js-toggle-menu');
var menuToggle = document.getElementsByTagName('body')[0];
for (var i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener('click', function() {
    if (menuToggle.classList.contains('open-menu')) {
      menuToggle.classList.remove('open-menu');
    } else {
      menuToggle.classList.add('open-menu');
    }
  });
}
