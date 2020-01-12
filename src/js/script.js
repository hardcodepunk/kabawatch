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

/*

click right button
  search active item retrieve img after and retrieve src to display
  if last item
    hide button to right
  if left button hidden
    show

click left button
  search active item retrieve img before and retrieve src to display
  if first item
    hide button to left
  if right button hidden
    show

*/

var galleryBtns = document.querySelectorAll('.shop-item__gallery-controls__btn');
var btnPrevious = document.getElementById('gallery__btn-previous');
var btnNext = document.getElementById('gallery__btn-next');

for (var i = 0; i < galleryBtns.length; i++) {
  galleryBtns[i].addEventListener('click', function() {

    console.log("btn clicked");
    var displayedItem = document.querySelector('.shop-item__gallery__item.is-being-displayed');
    console.log(displayedItem);

    // prev btn clicked
    if (this == btnPrevious) {
      console.log("previous btn clicked");

      var previousItem = displayedItem.previousElementSibling;

      displayedItem.classList.remove('is-being-displayed');
      previousItem.classList.add('is-being-displayed');
      console.log(sliderProjection.src);

      sliderProjection.src = previousItem.querySelector('.shop-item__gallery__item__visual__img').src;
      console.log(sliderProjection.src);

      console.log(displayedItem);
      console.log(previousItem);

      if ( previousItem.previousElementSibling == null ) {
        btnPrevious.classList.add('is-hidden');
      }

      if (btnNext.classList.contains('is-hidden')) {
        btnNext.classList.remove('is-hidden');
      }

    // next btn clicked
    } else if ( this == btnNext ) {
      console.log("next btn clicked");

      var nextItem = displayedItem.nextElementSibling;

      displayedItem.classList.remove('is-being-displayed');
      nextItem.classList.add('is-being-displayed');
      console.log(sliderProjection.src);
      sliderProjection.src = nextItem.querySelector('.shop-item__gallery__item__visual__img').src;
      console.log(sliderProjection.src);

      console.log(displayedItem);
      console.log(nextItem);

      if ( nextItem.nextElementSibling == null ) {
        btnNext.classList.add('is-hidden');
      }

      if (btnPrevious.classList.contains('is-hidden')) {
        btnPrevious.classList.remove('is-hidden');
      }
    }
  });
}
