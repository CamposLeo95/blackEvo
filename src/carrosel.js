document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', {
        // Configurações do Swiper aqui
        loop: true,
        spaceBetween: 10,
        breakpoints: {

            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        pagination: {
            // el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500, // Tempo em milissegundos entre os slides (por exemplo, 3000 para 3 segundos)
            disableOnInteraction: false, // Define se o autoplay é desativado quando o usuário interage com o swiper
        },
    });
});
