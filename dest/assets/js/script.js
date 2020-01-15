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

if (document.querySelector('.shop__list__item') !== null) {
  var shopPreviewImgs = document.querySelectorAll('.shop__list__item__visual');
  var shopListItem = document.querySelector('.shop__list__item');
  window.addEventListener("resize", function(){
    shopListItemWidth = shopListItem.offsetHeight;
    for (var i = 0; i < shopPreviewImgs.length; i++) {
      shopPreviewImgs[i].style.height = shopListItemWidth;
    }
  });
}

//gallery
if (document.querySelector('.show') !== null) {


  var sliderItems = document.querySelectorAll('.shop-item__gallery__item');
  var sliderProjection = document.getElementById('slider-projection');
  for (var i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', function() {
      if (this.classList.contains('is-being-displayed')) {

      } else {
        for (var i = 0; i < sliderItems.length; i++) {
          sliderItems[i].classList.remove('is-being-displayed');
        }
        this.classList.add('is-being-displayed');
        sliderProjection.src = this.querySelector('.shop-item__gallery__item__visual__img').src;
        var img = this.querySelector('.shop-item__gallery__item__visual__img');

        displayedItem = document.querySelector('li.shop-item__gallery__item.is-being-displayed');
        currentLocation = sliderItemsArray.indexOf(displayedItem) + 1;
        paginationElementCurrent.innerHTML = currentLocation;

        var previousItem = displayedItem.previousElementSibling;
        var nextItem = displayedItem.nextElementSibling;

        for (var i = 0; i < galleryBtns.length; i++) {
          galleryBtns[i].classList.remove('is-hidden');
        }

        if ( nextItem == null ) {
          btnNext.classList.add('is-hidden');
        }

        if (previousItem == null) {
          btnPrevious.classList.add('is-hidden');
        }
      }
    });
  }

  var galleryBtns = document.querySelectorAll('.shop-item__gallery-controls__btn');
  var btnPrevious = document.getElementById('gallery__btn-previous');
  var btnNext = document.getElementById('gallery__btn-next');

  var displayedItem = document.querySelector('li.shop-item__gallery__item.is-being-displayed');
  var sliderItemsArray = Array.prototype.slice.call(sliderItems);
  var currentLocation = sliderItemsArray.indexOf(displayedItem) + 1;
  var totalItems = sliderItems.length;
  var paginationElementTotal = document.getElementById('gallery__pagination__total');
  var paginationElementCurrent = document.getElementById('gallery__pagination__current');

  // initiate count in pagination
  paginationElementCurrent.innerHTML = currentLocation;
  paginationElementTotal.innerHTML = totalItems;

  for (var i = 0; i < galleryBtns.length; i++) {

    galleryBtns[i].addEventListener('click', function() {

      var displayedItem = document.querySelector('li.shop-item__gallery__item.is-being-displayed');

      // prev btn clicked
      if (this == btnPrevious) {

        var previousItem = displayedItem.previousElementSibling;

        displayedItem.classList.remove('is-being-displayed');
        previousItem.classList.add('is-being-displayed');

        sliderProjection.src = previousItem.querySelector('.shop-item__gallery__item__visual__img').src;

        if (previousItem.previousElementSibling == null) {
          btnPrevious.classList.add('is-hidden');
        }

        if (btnNext.classList.contains('is-hidden')) {
          btnNext.classList.remove('is-hidden');
        }

        currentLocation -= 1;

        paginationElementCurrent.innerHTML = currentLocation;

      // next btn clicked
      } else if ( this == btnNext ) {

        var nextItem = displayedItem.nextElementSibling;

        displayedItem.classList.remove('is-being-displayed');
        nextItem.classList.add('is-being-displayed');
        sliderProjection.src = nextItem.querySelector('.shop-item__gallery__item__visual__img').src;

        if ( nextItem.nextElementSibling == null ) {
          btnNext.classList.add('is-hidden');
        }

        if (btnPrevious.classList.contains('is-hidden')) {
          btnPrevious.classList.remove('is-hidden');
        }

        currentLocation += 1;
        paginationElementCurrent.innerHTML = currentLocation;
      }
    });
  }

  document.onkeydown = function(e) {
    var displayedItem = document.querySelector('li.shop-item__gallery__item.is-being-displayed');

    switch (e.keyCode) {

      case 37:
        console.log('yo');
        var previousItem = displayedItem.previousElementSibling;

        if (previousItem !== null) {
          console.log('niet null');
          displayedItem.classList.remove('is-being-displayed');
          previousItem.classList.add('is-being-displayed');

          sliderProjection.src = previousItem.querySelector('.shop-item__gallery__item__visual__img').src;

          if (previousItem.previousElementSibling == null) {
            btnPrevious.classList.add('is-hidden');
          }

          if (btnNext.classList.contains('is-hidden')) {
            btnNext.classList.remove('is-hidden');
          }

          currentLocation -= 1;

          paginationElementCurrent.innerHTML = currentLocation;
        }

        break;

      case 39:

        var nextItem = displayedItem.nextElementSibling;

        if (nextItem !== null) {
          displayedItem.classList.remove('is-being-displayed');
          nextItem.classList.add('is-being-displayed');
          sliderProjection.src = nextItem.querySelector('.shop-item__gallery__item__visual__img').src;

          if ( nextItem.nextElementSibling == null ) {
            btnNext.classList.add('is-hidden');
          }

          if (btnPrevious.classList.contains('is-hidden')) {
            btnPrevious.classList.remove('is-hidden');
          }

          currentLocation += 1;
          paginationElementCurrent.innerHTML = currentLocation;
        }

        break;
    }
  };
}
