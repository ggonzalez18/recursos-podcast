var swiper = new Swiper(".podcast-carousel", {
  slidesPerView: 1.1,
  // slidesPerGroup: 1,
  // slidesPerColumnFill: 'row',
  // slidesPerColumn: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 8,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
  renderBullet: function (index, className) {
  return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
},
  // autoHeight: true,
  breakpoints: {
 576: {
      slidesPerView: 2,
      spaceBetween: 16,
      grid: {
        rows: 1
      },
   slidesPerGroup: 2,
 },
   767: {
      slidesPerView: 3,
      spaceBetween: 24,
      grid: {
        rows: 2
      },
   slidesPerGroup: 3,
 },
 1020: {
      slidesPerView: 3,
      spaceBetween: 24,
      grid: {
        rows: 2
      },
  slidesPerGroup: 6,
 },
  1200: {
      slidesPerView: 3,
      // slidesPerColumn: 4,
      // slidesPerColumnFill: 'row',
      spaceBetween: 24,
      grid: {
        rows: 2
      },
   slidesPerGroup: 3,
 },
 },
});


const openElement = document.getElementsByClassName('podcast-button__plus');
const closeElement = document.getElementsByClassName('podcast-button__close');
const showDescription = document.getElementsByClassName('box-podcast__description');
const hiddeTitle = document.getElementsByClassName('box-podcast__title');

for (let index = 0; index < openElement.length; index++) {
  openElement[index].addEventListener('click', function(e){
    showDescription[index].classList.remove('hidde')
    hiddeTitle[index].classList.add('hidde')
  })
}

for (let index = 0; index < closeElement.length; index++) {
  closeElement[index].addEventListener('click', function(e){
    showDescription[index].classList.add('hidde')
    hiddeTitle[index].classList.remove('hidde')
  })
}

