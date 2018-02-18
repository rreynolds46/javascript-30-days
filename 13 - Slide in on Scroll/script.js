const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(slideImage => {
        const scrollAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = scrollAt > slideImage.offsetTop;
        const isNotPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    });
}   

window.addEventListener('scroll', debounce(checkSlide));





function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


