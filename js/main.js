const elCart = document.querySelector('.js-cart'),
elCard = document.querySelector('.js-card'),
elsTrash = document.querySelectorAll('.js-trash'),
elsCardItem = document.querySelectorAll('.js-card-item'),
elCardInner = document.querySelector('.js-card-inner');

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
        elCardInner.classList.add('shopping-card__item--close');
      }
      else {
        elsCardItem[index].classList.add('shopping-card__item--close');
      }
    });
  });
}