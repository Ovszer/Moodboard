let currentIndex =0 ;

function showSlide(index) {
const carousel = document.querySelector('.team_list');
const totalSlides = document.querySelectorAll('.member').length;

if (index >= totalSlides) {
  currentIndex = 0;
} else if (index < 0) {
  currentIndex = totalSlides - 1;
} else {
  currentIndex = index;
}

const translateValue = -currentIndex * 20+ '%';
carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevMember() {
  if (currentIndex < 5) { 
    showSlide(currentIndex + 1);
  }
}

function nextMember() {
  if (currentIndex > 0) { 
  showSlide(currentIndex - 1);
}
}