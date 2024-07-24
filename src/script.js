let swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
        // quando a largura da tela for >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        // quando a largura da tela for >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        // quando a largura da tela for >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        // quando a largura da tela for >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // quando a largura da tela for >= 1440px
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          // quando a largura da tela for >= 2560px
        2560: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
      },
  });

  let swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // quando a largura da tela for >= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      // quando a largura da tela for >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      // quando a largura da tela for >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      // quando a largura da tela for >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      // quando a largura da tela for >= 1440px
      1440: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        // quando a largura da tela for >= 2560px
      2560: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
    },
  });

  document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('box');
    box.classList.remove('animate');
    
    // Força o reflow para reiniciar a animação
    void box.offsetWidth;

    // Readiciona a classe animate para reiniciar a animação
    box.classList.add('animate');
});

document.getElementById('animateButton-2').addEventListener('click', function() {
  const box = document.getElementById('box-2');
  box.classList.remove('animate');
  
  // Força o reflow para reiniciar a animação
  void box.offsetWidth;

  // Readiciona a classe animate para reiniciar a animação
  box.classList.add('animate');
});