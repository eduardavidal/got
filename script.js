let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1; // volta para o último slide
  } else if (index >= slides.length) {
    currentSlide = 0; // volta para o primeiro slide
  } else {
    currentSlide = index;
  }
  
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
  
  // Atualiza classe active para os slides
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}


function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

showSlide(currentSlide);
