var menuToggle = document.querySelector('.body');

var menuButtons = document.querySelectorAll('.js-toggle-menu');
for (var i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener('click', function() {
    if (menuToggle.classList.contains('open-menu')) {
      menuToggle.classList.remove('open-menu');
    } else {
      menuToggle.classList.add('open-menu');
    }
  });
}

var advancedFilterButtons = document.querySelectorAll('.js-toggle-advanced-filter');
for (var i = 0; i < advancedFilterButtons.length; i++) {
  advancedFilterButtons[i].addEventListener('click', function() {
    if (menuToggle.classList.contains('open-advanced-filter')) {
      menuToggle.classList.remove('open-advanced-filter');
    } else {
      menuToggle.classList.add('open-advanced-filter');
    }
  });
}

var sliderItems = document.querySelectorAll('.shop-item__gallery__item');
var sliderProjection = document.getElementById('slider-projection');
for (var i = 0; i < sliderItems.length; i++) {
  sliderItems[i].addEventListener('click', function() {
    console.log(this);
    if (this.classList.contains('is-being-displayed')) {

    } else {
      for (var i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('is-being-displayed');
      }
      this.classList.add('is-being-displayed');
      sliderProjection.src = this.querySelector('.shop-item__gallery__item__visual__img').src;
      var img = this.querySelector('.shop-item__gallery__item__visual__img');
    }
  });
}

var shopPreviewImgs = document.querySelectorAll('.shop__list__item__visual');
var shopListItem = document.querySelector('.shop__list__item');
window.addEventListener("resize", function(){
  shopListItemWidth = shopListItem.offsetHeight;
  console.log(shopListItemWidth);
  for (var i = 0; i < shopPreviewImgs.length; i++) {
    shopPreviewImgs[i].style.height = shopListItemWidth;
  }
});
