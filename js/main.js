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

elsTrash.forEach(function (elTrash){
  elTrash.addEventListener('click', function (elTrash, index) {
    if (`index == array.length - 1`) {
      elCardInner.classList.add('shopping-card__list-wrapper--close')
    } else {
      console.log("Bu oxirgi element emas");
    }

    // elsCardItem.classList.add('shopping-card__item--close')
  });
});