// Carousel Navigation Script
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel-games');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  
  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = carousel.offsetWidth * 0.8; // Scroll 80% da largura visível
    
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
    
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    // Adicionar animação de fade-in nos cards quando aparecem na viewport
    const observerOptions = {
      root: carousel,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }
      });
    }, observerOptions);

    // Observar todos os cards
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    // Tornar o primeiro card visível imediatamente
    if (carouselItems[0]) {
      carouselItems[0].style.opacity = '1';
      carouselItems[0].style.transform = 'scale(1)';
    }
  }
});
