  let currentIndex =0 ;

  function showSlide(index) {
  const carousel = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 30+ '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextSlide() {
    if (currentIndex < 3) { 
      showSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) { 
    showSlide(currentIndex - 1);
  }
}