document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = JSON.parse(carousel.dataset.items); // Obtenemos los ítems del atributo data-items
    const totalItems = items.length;
  
    let currentIndex = 0; // Índice del slide visible
    const transitionDuration = 500; // Duración de la transición en ms
    const autoSlideIntervalTime = 5000; // Tiempo entre auto-deslizamientos en ms
  
    // Duplicar los elementos al inicio y al final para crear un efecto loop
    const firstClone = carousel.innerHTML;
    const lastClone = carousel.innerHTML;
  
    carousel.insertAdjacentHTML("beforeend", firstClone); // Clones al final
    carousel.insertAdjacentHTML("afterbegin", lastClone); // Clones al inicio
  
    // Función para actualizar la posición del carrusel
    function updateCarousel(index, transition = true) {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
      const offset = -(index * itemWidth);
  
      // Aplicar transición si es necesario
      if (transition) {
        carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      } else {
        carousel.style.transition = "none";
      }
  
      carousel.style.transform = `translateX(${offset}px)`;
    }
  
    // Función para manejar el siguiente slide
    function nextSlide() {
      currentIndex++;
      updateCarousel(currentIndex);
  
      // Reiniciar al primer slide si llegamos al final
      if (currentIndex >= totalItems) {
        setTimeout(() => {
          currentIndex = 0;
          updateCarousel(currentIndex, false); // Sin transición
        }, transitionDuration);
      }
    }
  
    // Función para manejar el slide anterior
    function prevSlide() {
      currentIndex--;
      updateCarousel(currentIndex);
  
      // Reiniciar al último slide si llegamos al principio
      if (currentIndex < 0) {
        setTimeout(() => {
          currentIndex = totalItems - 1;
          updateCarousel(currentIndex, false); // Sin transición
        }, transitionDuration);
      }
    }
  
    // Botones de navegación
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    prevBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval); // Pausa auto-slide al interactuar
      prevSlide();
      startAutoSlide(); // Reinicia auto-slide
    });
  
    nextBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      nextSlide();
      startAutoSlide();
    });
  
    // Auto deslizamiento
    let autoSlideInterval;
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, autoSlideIntervalTime);
    }
  
    // Pausar auto-slide al pasar el ratón
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
    carousel.addEventListener("mouseleave", startAutoSlide);
  
    // Inicialización
    startAutoSlide(); // Inicia auto-deslizamiento
    updateCarousel(totalItems); // Coloca la vista en el primer clon
  });
  
  