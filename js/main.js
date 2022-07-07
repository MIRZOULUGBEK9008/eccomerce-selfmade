// Object
const cartModifiers = {
  closeItem: 'shopping-card__item--close',
  toggleActiveClass: 'lightbox__button--active'
};

// Variables
const elCart = document.querySelector('.js-cart'),
elCard = document.querySelector('.js-card'),
elCardInner = document.querySelector('.js-card-inner'),
elCount = document.querySelector('.counter__text'),
elMinus = document.querySelector('.js-minus'),
elPlus = document.querySelector('.js-plus'),
elsTrash = document.querySelectorAll('.js-trash'),
elsCardItem = document.querySelectorAll('.js-card-item'),
elsLightboxButton = document.querySelectorAll('.js-lightbox-button');


// Cart
if (elCart) {
  elCart.addEventListener('click', function () {
    elCard.classList.toggle('shopping-card--open')
  });
}
let count = 0;
if (elsTrash) {
  elsTrash.forEach(function (item, index) {
    elsTrash[index].addEventListener('click', function () {
      count++;
      if (count == elsTrash.length) {
        elCardInner.classList.add(cartModifiers.closeItem);
      }
      else {
        elsCardItem[index].classList.add(cartModifiers.closeItem);
      }
    });
  });
}

function removeAllActiveClass() {

  elsLightboxButton.forEach(function (element) {
    element.classList.remove(cartModifiers.toggleActiveClass);
  });
}

elsLightboxButton.forEach(function (element, index){
  element.addEventListener('click', function () {
    // Remove Class
    removeAllActiveClass();
    // Add active
    element.classList.add(cartModifiers.toggleActiveClass);
  });
});


// Counter
elPlus.addEventListener('click', function (){
  if (elCount.textContent < 99) {
    elCount.textContent = + elCount.textContent + 1;
  }
});

elMinus.addEventListener('click', function (){
  if (elCount.textContent > 1) {
    elCount.textContent = + elCount.textContent - 1;
  }
});
