
$(document).ready(function(){

    $('#jquery').on('click',function(){
    
        alert('hello')
    });
    
    
    });
    $(document).ready(function() {
        $('.burger-menu').click(function(event){
            $('.burger-menu').toggleClass('active');
            $('.burger-background').toggleClass('active');
            $('.nav').toggleClass('active');
            $('#burger').toggleClass('active');
            $('.logo-tlt').toggleClass('active');
        });
    });
   

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        
        loop: true,
        slidesPerView: 3,
        grabCursor: true,
        speed:400,
       
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
       
      });